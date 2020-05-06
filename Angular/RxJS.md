# 1. 리액티브 프로그래밍이란?

리액티브(Reactive, 반응형) 프로그래밍은 비동기 데이터 스트림(Asynchronous data stream)에 기반을 둔 프로그래밍 패러다임이다. 데이터 스트림이란 연속적인 데이터의 흐름을 말하며 리액티브 프로그래밍은 기본적으로 모든 것을 데이터 스트림으로 본다.

기존의 프로그래밍 방식은 배열과 함수 반환값과 같은 동기 데이터를 처리하는 방식 + Ajax 통신 결과, 사용자 이벤트와 같은 비동기 데이터 처리 방식이 제각각이지만, 리액티브 프로그래밍은 동기/비동기와 관계없이 데이터를 생산하는 것이라면 무엇이든 시간축을 따라 연속적으로 흐르는 데이터 스트림으로 처리한다. 리액티브 프로그래밍은 다양한 데이터를 데이터 스트림이라는 하나의 일관된 형식으로 만들고, 이 데이터 스트림을 구독(subscribe)하여 데이터 스트림의 상태 변화에 반응하는 방식으로 동작하는 애플리케이션을 작성하는 것을 말한다.

리액티브 프로그래밍은 Push scenario으로 동작하는 애플리케이션을 작성하는 것이다. 즉, **필요한 데이터를 획득하기 위해서 애플리케이션이 외부 환경에 요청하여 데이터를 획득하는 것이 아니라, 애플리케이션은 외부 환경을 관찰하고 있다가 외부 환경에서 데이터 스트림을 방출하면 그것에 반응하여 데이터를 획득**한다.

이때 외부 환경에서 애플리케이션 내부로 연속적으로 흐르는 데이터, 즉 데이터 스트림을 생성하고 방출하는 객체를 **옵저버블(Observable)**이라 하고, 옵저버블이 방출한(emit) **노티피케이션(Notification: 옵저버블이 방출할 수 있는 푸시 기반 이벤트 또는 값)**을 획득하여 사용하는 객체를 **옵저버(Observer)**라 한다. 다시 말해 데이터 소비자(Data consumer)인 옵저버는 데이터 생산자(Data producer)인 옵저버블을 **구독(subscription)**한다. 이 구독에 의해 옵저버는 옵저버블에 연결되어 옵저버블의 상태를 관찰한다. 그리고 옵저버블이 방출한 노티피케이션은 옵저버에게 자동으로 전파된다. 

옵저버블은 Angular의 고유 기능이 아니라 ES7 스펙으로 제안이 되어 있는 비동기 데이터를 처리하기 위한 표준이다. 리액티브 프로그래밍은 [옵저버(Observer) 패턴](https://en.wikipedia.org/wiki/Observer_pattern)을 좀 더 심화한 패턴으로 이미 다양한 라이브러리가 지원하고 있다.

```typescript
type Message = { message: string };

class Subject {
  private _observers: Observer[] = [];
  protected _state: Message = { message: '' };

  // Observer 등록(구독)
  add(observer: Observer) {
    this._observers = [...this._observers, observer];
    console.log('구독', observer);
    console.log('현재 구독 명단', this._observers);
  }

  // Observer 삭제(구독 해지)
  remove(observer: Observer) {
    this._observers 
      = this._observers.filter(o => o !== observer);
    console.log('구독 해지', observer);
    console.log('현재 구독 명단', this._observers);
  }

  // 구독한 모든 Observer의 update 메소드를 호출하여 데이터를 전파
  protected notify(state: Message) {
    this._observers.forEach(o => {
      console.log(`${o.constructor.name}에게 데이터를 전파한다!`, state);
      o.update(state);
    });
  }
}

class MySubject extends Subject {
  // 구독한 모든 Observer에게 메시지를 전파 
  setMessage(message: string) {
    this._state.message = message;
    this.notify(this._state);
  }
}

abstract class Observer {
  // Subject에 의해 호출되어 메시지를 전파받는다.
  abstract update(message: Message): void;
}

class Observer1 extends Observer { 
  update(message: Message) {
    console.log(`${this.constructor.name}에게 데이터가 전파되었다!`, message);
  }
}
class Observer2 extends Observer {
  update(message: Message) {
    console.log(`${this.constructor.name}에게 데이터가 전파되었다!`, message);
  }
}

const subject = new MySubject();
console.log(subject);
const o1 = new Observer1();
const o2 = new Observer2();

// 구독
subject.add(o1);
subject.add(o2);

// 데이터 전파
subject.setMessage('👋');

// 구독 취소
subject.remove(o2);

// 데이터 전파
subject.setMessage('😀');

```

RxJS는 Angular의 필수 패키지로 선탹된 비동기 데이터 스트림을 처리하는 API를 제공하는 자바스크립트 라이브러리다.

# 2. 리액티브 프로그래밍의 특징

HTTP 요청은 비동기로 처리되기 때문에 작업이 종료되지 않은 상태라도 대기하지 않고(Non-Blocking) 다음 작업을 수행할 수 있다. 이후 서버의 응답이 도착하면 데이터를 처리하거나 화면을 갱신한다. 이러한 비동기 처리는 콜백함수나 [프로미스](https://poiemaweb.com/es6-promise), Generator, async/await 또는 옵저버블로 구현할 수 있다. 콜백함수를 사용하는 경우, 에러 처리가 어렵고 콜백 헬(Callback Hell) 등의 문제가 발생하므로 프로미스를 사용하는 것이 더 나은 방법이지만 프로미스는 아래와 같은 단점이 있다.

- 한 번에 하나의 데이터를 처리하기 때문에 연속성을 갖는 데이터를 처리할 수 없다.
- 서버로 보낸 요청은 취소할 수 없다.

옵저버블은 기존 비동기 처리 방식의 단점을 해결할 수 있는 더 나은 대안이다.

또 다른 문제는 처리해야 할 데이터의 유형이 다양하다는 것이다. 애플리케이션이 처리해야 할 데이터는 배열과 함수 반환값과 같은 동기 데이터와 Ajax 통신 결과, 사용자 이벤트와 같은 비동기 데이터 등 여러 가지의 유형을 가지며 이러한 데이터의 유형에 따라 처리하는 방식도 제각각이다. 리액티브 프로그래밍은 동기/비동기와 관계없이 데이터를 생산하는 것이라면 무엇이든 옵저버블로 만들 수 있다. 리액티브 프로그래밍은 이처럼 다양한 형태의 데이터를 처리하기 위한 일관된 방식을 제공하며 이를 통해 안전하고 통일된 데이터 처리가 가능하다.

# 3. RxJS 임포트

Angular CLI를 사용해 생성한 프로젝트에는 RxJS 라이브러리가 포함되어 있다.

- rxjs: Observable, Subject, pipe, 스케줄러, 유틸리티 등

  ```typescript
  import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
  ```

- rxjs/operators: pipe 내에서 사용할 수 있는 모든 operators

  ```typescript
  import { map, filter, scan, tap } from 'rxjs/operators';
  ```

# 4. Observable과 Observer

Observable은 연속성을 갖는 데이터를 스트리밍하고 Observer는 연속적으로 보내진 데이터를 받아 처리한다.

구현의 관점에서 구독(subscription)이란 Observable의 subscribe 오퍼레이터를 호출할 때 argument로 Observer를 전달하는 것을 말한다.

```typescript
import { Component, OnInit } from '@angular/core';

// RxJS 임포트
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: ''
})
export class AppComponent implements OnInit {
  ngOnInit() {

    // 옵저버블이 구독될 때 호출되는 구독 함수
    const subscriber = (observer) => {
      try {
        // next 노티피케이션 방출
        observer.next(1);
        observer.next(2);

        // throw new Error('Something wrong!');

        // complete 노티피케이션 방출
        observer.complete();
      } catch(e) {
        // error 노티피케이션 방출
        observer.error(e);
      } finally {
        // 구독 해지될 때 호출되는 콜백 함수
        return () => console.log('Unsubscribed!')
      }
    }

    // 옵저버블 생성
    const observable$ = new Observable(subscriber);

    // 구독(Subscription)
    observable$.subscribe(
      // 옵저버블이 방출한 next 노티피케이션에 반응하는 next 메소드
      value => console.log(value),
      // 옵저버블이 방출한 error 노티피케이션에 반응하는 error 메소드
      error => console.error(error),
      // 옵저버블이 방출한 complete 노티피케이션에 반응하는 complete 메소드
      () => console.log('Complete')
    );
  }
}
```

애플리케이션의 외부 환경에 반응하는 옵저버블을 생성해본다.

```typescript
import { Component, OnInit } from '@angular/core';

// ① RxJS 임포트
import { Observable, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <h3>Mouse Coordinates</h3>
    <h3>X: {{ posX }} Y: {{ posY }}</h3>
  `
})
export class AppComponent implements OnInit {
  mousePositon$ :Observable<Event>;
  posX: number = 0;
  posY: number = 0;

  ngOnInit() {
    // ② 옵저버블의 생성(DOM 이벤트를 옵저버블로 변환)
    this.mousePositon$ = fromEvent(document, 'mousemove');

    // ③ 옵저버는 옵저버블을 구독하고 옵저버블이 방출한 데이터를 전파받아 사용한다.
    this.mousePositon$.subscribe(
      (event: MouseEvent) => {
        this.posX = event.clientX;
        this.posY = event.clientY;
      },
      error => console.log(error),
      () => console.log('complete!')
    );
  }
}
```

② fromEvent 오퍼레이터를 사용하여 document 요소의 mousemove 이벤트를 옵저버블로 변환했다. 데이터를 생산하는 것이라면 무엇이든 옵저버블로 만들 수 있다. fromEvent 오퍼레이터는 DOM 요소에서 mousemove 이벤트가 발생하면 이를 감지하여 연속적인 이벤트 스트림으로 만들고 이를 노티피케이션에 담아 옵저버에게 방출(emit)한다.

주의할 것은 이 시점에 Observable은 아무런 동작을 하지 않는다는 것이다. **Observable은 구독(subscribe)되기 전까지 동작하지 않는다**.

> Observable은 구독(subscribe)되기 전까진 동작하지 않는다고 했다. 이런 특성을 갖는 Observable을 Cold Observable이라고 한다. RxJS의 Observable은 기본적으로 Cold Observable이다.
>
> Cold Observable은 구독되기 전에는 데이터 스트림을 방출(emit)하지 않으며 옵저버가 구독하면 처음부터 동작하기 시작한다. 따라서 Observer는 Observable이 방출하는 모든 데이터 스트림을 빠짐없이 처음부터 받을 수 있다.

③ subscribe 오퍼레이터를 사용하여 옵저버가 옵저버블을 구독하도록 했다. 옵저버는 next, error, complete 메소드를 갖는 객체이며 subscribe 오퍼레이터의 인자로 사용하면 옵저버블을 구독한다.

| 옵저버 메소드   | 설명                                                         | 노티피케이션 내용 |
| :-------------- | :----------------------------------------------------------- | :---------------- |
| next 메소드     | 옵저버블이 방출한 next 타입의 노티피케이션에 반응하는 콜백 함수 | 값 또는 이벤트    |
| complete 메소드 | 옵저버블이 방출한 complete 타입의 노티피케이션에 반응하는 콜백 함수 | 없음              |
| error 메소드    | 옵저버블이 방출한 error 타입의 노티피케이션에 반응하는 콜백 함수 | 에러 객체         |

옵저버블은 mousemove 이벤트를 데이터 스트림으로 생성하고 방출하여 옵저버에게 전파한다. 옵저버블은 구독을 해지(unsubscribe)하거나 complete 메소드가 호출될 때까지 옵저버에게 새로운 데이터를 계속해서 전파한다. 이때 옵저버에게 새로운 값이 성공적으로 전달되면 next 메소드가 호출되고 에러가 발생하면 error 메소드가 호출된다.

위 예제는 subscribe 오퍼레이터의 인자로 next, error, complete 메소드를 전달하였다. subscribe 오퍼레이터의 인자로 next, error, complete 메소드를 갖는 객체 리터럴을 전달하는 것도 유효하다.

```typescript
...
  this.mousePositon$.subscribe({
    next: (event: MouseEvent) => {
      this.posX = event.clientX;
      this.posY = event.clientY;
    },
    error: error => console.log(error),
    complete: () => console.log('complete!')
  });
...
```

# 5. Operator

Operator는 옵저버블의 생성(Creating), 변환(Transforming), 필터링(Filtering), 에러 처리(Error Handling)의 기능을 하는 함수이다.

Operator는 새로운 옵저버블을 반환하므로 subscribe 메소드에 도달하기 전까지 체이닝을 통해 데이터를 전달할 수 있다. 체이닝으로 이어지는 과정을 **Observable sequence**라고 부른다.

```typescript
// observable.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';

// RxJS 임포트
import { Observable, Subscription, from } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: '<p>{{ values }}</p>'
})
export class ObservableComponent implements OnInit, OnDestroy {
  myArray = [1, 2, 3, 4, 5];
  subscription: Subscription;
  values: number[] = [];

  ngOnInit() {
    // ① 옵저버블 생성
    const observable$ = from(this.myArray);

    this.subscription = observable$
      .pipe(
        // ② 오퍼레이터에 의한 옵저버블 변형
        map(item => item * 2), // 2, 4, 6, 8, 10
        filter(item => item > 5), // 6, 8, 10
        tap(item => console.log(item)) // 6, 8, 10
      )
      // ③ 옵저버블 구독
      .subscribe(
        // next
        value => this.values.push(value),
        // error
        error => console.log(error),
        // complete
        () => console.log('Streaming finished')
      );
  }

  ngOnDestroy() {
    // ④ 옵저버블 구독 해지
    this.subscription.unsubscribe();
  }
}
```

① [from](https://www.learnrxjs.io/operators/creation/from.html) 오퍼레이터를 사용하여 옵저버블을 생성한다.

>  from 오퍼레이터는 배열과 같은 [이터러블(Iterable)](https://poiemaweb.com/es6-iteration-for-of)을 인자로 전달받아 옵저버블을 생성한다.
>
> Promise를 Observable로 변환할 수도 있다.

② map과 filter 오퍼레이터를 사용하여 옵저버블을 변형(transforming), 필터링한다. 오퍼레이터는 옵저버블을 반환하므로 체이닝이 가능하다.

>  [map](https://www.learnrxjs.io/operators/transformation/map.html) 오퍼레이터는 옵저버블이 방출한 데이터를 인자로 전달받는 콜백 함수를 실행하고 그 결과값으로 이루어진 새로운 옵저버블을 반환한다. [Array.prototype.map](https://poiemaweb.com/js-array#513-arrayprototypemap)과 유사하게 동작한다.

>  [filter](https://www.learnrxjs.io/operators/filtering/filter.html) 오퍼레이터는 옵저버블이 방출한 데이터를 인자로 전달받는 필터 함수를 실행하여 그 결과값이 true인 값만을 추출한 새로운 옵저버블을 반환한다. [Array.prototype.filter](https://poiemaweb.com/js-array#514-arrayprototypefilter)와 유사하게 동작한다.

③ [subscribe](http://reactivex.io/documentation/operators/subscribe.html) 오퍼레이터의 인자에 옵저버를 전달해 옵저버블을 구독하면 옵저버블은 방출한 데이터와 에러 그리고 스트리밍의 종료 여부를 옵저버에 전달한다. 옵저버는 3개의 콜백 함수 next, error, complete 메소드를 갖는데 이 콜백 함수로 옵저버블이 방출한 데이터와 에러 그리고 스트리밍의 종료 여부를 받아 처리한다.

④ 옵저버블이 생성한 데이터 스트림을 subscribe 오퍼레이터로 구독하면 **Subscription** 객체를 반환한다. 이 Subscription 객체는 구독을 취소할 때 사용할 수 있다. **메모리 누수를 방지하기 위해 OnDestroy 생명주기 훅을 사용하여 구독을 취소하도록 한다.**


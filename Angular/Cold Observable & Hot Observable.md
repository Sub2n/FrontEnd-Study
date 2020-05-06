# 1. Cold Observable

옵저버블은 subscribe되기 전까지 동작하지 않는다고 했다. 이런 특성을 갖는 옵저버블을 Cold Observable이라고 한다. RxJS의 옵저버블은 기본적으로 Cold Observable이다. Cold observable은 구독되기 이전에는 데이터 스트림을 방출(emit)하지 않으며 **Cold Observable을 옵저버가 구독하면 처음부터 동작하기 시작한다.** 따라서 옵저버는 옵저버블이 방출하는 모든 데이터 스트림을 빠짐없이 처음부터 받을 수 있다.

옵저버블을 구독하는 옵저버는 하나 이상일 수 있는데 Cold Observable을 구독하는 모든 옵저버들은 구독하는 시점과 상관없이 Cold Observable이 방출하는 모든 데이터를 처음부터 빠짐없이 모두 받을 수 있다. 이것은 **Cold Observable을 구독하는 모든 옵저버는 자신만을 위해 독립적으로 실행하는 옵저버블을 갖게 된다고 볼 수 있는데 이런 특징을 unicast**라 한다. 옵저버블 - 옵저버 1대1 매핑.

# 2. Hot Observable

**Hot Observable은 옵저버블을 생성하자마자 구독과 상관없이 바로 데이터 스트림을 방출(emit)**하기 시작한다. 따라서 일정 시간이 경과한 시점에 옵저버블을 구독하면 데이터 스트림의 앞부분은 구독할 수 없고 중간부터 구독하게 된다. Hot Observable은 구독 시점부터 방출되는 데이터를 받는 것을 기본으로 한다.

Cold Observable을 Hot Observable로 만들려면 publish, share 오퍼레이터를 사용할 수도 있지만 `Subject`를 사용하면 편리하다. Subject는 옵저버블이면서 옵저버이다. 따라서 옵저버블을 구독할 수도 있고 옵저버처럼 next, complete 메소드를 직접 호출할 수 있다. 이렇게 next 메소드를 호출할 수 있으므로 Subject를 사용하면 데이터를 방출할 수도 있다. 이것은 Cold Observable의 unicast 특성과 달리 Hot Observable을 구독하고 있는 모든 옵저버에게 side-effect가 있다는 의미다. 이런 특징을 multicast라고 한다.

# 3. unicast vs multicast

Cold Observable은 unicast하고 Hos Observable은 multicast하다.

Cold observable을 구독하는 모든 옵저버는 자신만을 위해 독립적으로 실행하는 옵저버블을 갖게 된다. 다시 말해 옵저버블과 옵저버는 일대일(one-to-one)의 관계를 갖는다. 하지만 Hot observable를 구독하고 있는 모든 옵저버에게 부수 효과(side-effect)가 있다. 다시 말해 옵저버블과 옵저버는 일대다(one-to-many)의 관계를 갖는다.

![img](https://poiemaweb.com/img/unicast-multicast.png)


```typescript
import { Observable, Subject } from 'rxjs';

/* Unicast */
const coldObservable$ = Observable.create(
  // 랜덤 데이터 방출
  observer => observer.next(Math.random())
);

/* Cold observable을 구독하는 모든 옵저버는 자신만을 위해 독립적으로 실행하는 옵저버블을 갖게 된다. */
coldObservable$.subscribe(
  value => console.log(`1st Cold observable's observer: ${value}`)
);

coldObservable$.subscribe(
  value => console.log(`2nd Cold observable's observer: ${value}`)
);

/* Multicast */
const subject = new Subject();
const hotObservable$ = subject.asObservable();

/* 구독하고 있는 모든 옵저버에게 부수 효과(side-effect)가 있다. */
hotObservable$.subscribe(
  value => console.log(`1st Hot observable's observer: ${value}`)
);

hotObservable$.subscribe(
  value => console.log(`2nd Hot observable's observer: ${value}`)
);

// 랜덤 데이터 방출
subject.next(Math.random());


// 1st Cold observable's observer: 0.8946926920315945
// 2nd Cold observable's observer: 0.7792245472913495
// 1st Hot observable's observer: 0.7808906432807889
// 2nd Hot observable's observer: 0.7808906432807889
```


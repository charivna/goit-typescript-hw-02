/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface PropsComponent {
  title: string;
}

class Component<T extends PropsComponent> {
  constructor(public props: T) {}
}

class Page extends Component<PropsComponent> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};

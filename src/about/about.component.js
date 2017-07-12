import template from './about.component.html';

export const AboutComponent = {
  template,
  controller: class AboutComponent {
    constructor() {
      this.name = 'bob';
    }

    setName() {
      this.name = 5;
    }
  }
};

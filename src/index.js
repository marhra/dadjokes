import './index.html';
import './style.css';

new Vue({
  el: "app",
  data: {
    likesUp: 0,
    likesDown: 0,
  },
  methods: {
    likeUp() {
      this.likesUp = this.likesUp + 1;
    },
    likeDown() {
      this.likesDown = this.likesDown + 1;
    }
  }
});

import { LightningElement } from "lwc";

export default class App extends LightningElement {
  title = "Welcome to Lightning Web Components!";

  showFeatures = true;

  /**
   * Getter for the features property
   */
  get features() {
    return [
      {
        label: "Learn in the browser.",
        icon: "utility:edit",
      },
      {
        label: "View changes to code instantly with Live Compilation.",
        icon: "utility:refresh",
      },
      {
        label: "Style your components with SLDS.",
        icon: "utility:brush",
      },
    ];
  }

  video = "https://www.w3schools.com/tags/movie.mp4";

    handlePlay() {
        this.template.querySelector('c-video-player').play();
    }

    handlePause() {
        this.template.querySelector('c-video-player').pause();
    }
}

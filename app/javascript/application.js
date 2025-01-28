// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

const TabPanel = {
  init: function() {
    this.tabs = document.querySelectorAll('.tab');
    this.tabPanel = document.querySelectorAll('.tab-panel');

    this.tabs.forEach((tab) => {
      tab.addEventListener('click', (event) => {
        this.toggleTab(event);
      });
    });
  },
  toggleTab: function(event) {
    const target = event.currentTarget;
    const panel = document.getElementById(target.dataset.panel);
    const activeClasses = ['bg-white', 'border-l-[1px]', 'border-t-[1px]', 'border-b-[1px]'];

    this.tabs.forEach((tab) => {
      tab.classList.remove(...activeClasses);
    });

    this.tabPanel.forEach((panel) => {
      panel.classList.add('hidden');
    });

    target.classList.add(...activeClasses);
    panel.classList.remove('hidden');
  }
};

$(document).on('turbo:load', function() {
  TabPanel.init();
});

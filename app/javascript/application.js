// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"


$(document).ready(function() {
  // Optional: Show the first panel by default
  $('.tab').first().addClass('bg-white border-l-[1px] border-t-[1px] border-b-[1px]');
  $('.tab-panel').hide().first().show();

  $('.tab').on('click', function() {
    // Remove highlight from all tabs
    $('.tab').removeClass('bg-white border-l-[1px] border-t-[1px] border-b-[1px]');

    // Highlight this tab
    $(this).addClass('bg-white border-l-[1px] border-t-[1px] border-b-[1px]');

    // Hide all panels
    $('.tab-panel').addClass('hidden').hide();

    // Show the targeted panel
    const targetPanel = $(this).data('panel');
    $('#' + targetPanel).removeClass('hidden').show();
  });
});

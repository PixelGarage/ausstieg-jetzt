<?php

/**
 * @file
 * Rate widget theme
 */
 
// print '<div class="rate-label">' . $display_options['title'] . '</div>';

// print score
if (isset($score)) {
  print '<span class="rating-score">' . $score . '</span>';
}

// print button
print $up_button;

if ($info) {
  print '<div class="rate-info">' . $info . '</div>';
}

if ($display_options['description']) {
  print '<div class="rate-description">' . $display_options['description'] . '</div>';
}

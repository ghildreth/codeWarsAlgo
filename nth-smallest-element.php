<!-- Nth Smallest Element (Array Series #4) -->
<?php
// I thought solving this problem would be elegantly solved with recursion
function NthSmallest($arr, $pos)
{
    $currentMin = min($arr);
    if($pos == 1) {
      return $currentMin;
    } else {
      $currentIndex = array_search($currentMin, $arr);
      array_splice($arr, $currentIndex, 1);
      var_dump($arr);
      $newPos = $pos - 1;
      return NthSmallest($arr, $newPos);
  }
}

// althought you can also use a for loop
function NthSmallest($arr, $pos)
{
     for($i = 1; $i < $pos; $i++){
        array_splice($arr, array_search(min($arr), $arr), 1);
    }
    return min($arr);
}


// I also found this answer on codewars which leverages the fact a sorted array will find the smallest number off by one 
function NthSmallest($arr, $pos)
{
  sort($arr);
  var_dump($arr);
  return $arr[$pos - 1];
}
?>
// quick sort== instead of keep the random pivot in the random index, put the pivot at the left
// for the later comparison, no need to keep tracking the value as well as pivot index
// just find out where the edge case is and swap pivot back

function _partition(arr, l, r) {
  let j = l, temp;
  // for nearly sorted array use the random as the pivot will avoid o(n2)
  let idx = Math.floor(Math.random()*(r-l+1)+l);
  temp = arr[l];
  arr[l] = arr[idx];
  arr[idx] = temp;
  let v = arr[l];
  for (let i=l+1; i <= r; i++) {
    if (arr[i] < v) {
      j +=1;
      temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
  }
  temp = arr[l];
  arr[l] = arr[j];
  arr[j] = temp;
  return j;
}

function quickSort(arr) {
  _quickSort(arr, 0, arr.length-1);
}
function _quickSort(arr, l, r) {
  // if(l >= r) {
  //   return;
  // }
  if (r-l <= 15) {
    _insertion(arr, l, r);
    return;
  }
  let p = _partition(arr, l, r);
  _quickSort(arr, l, p-1);
  _quickSort(arr, p+1, r);
}

//---------use two way partition--------more efficient for array with lots of duplications-----//
function quickSort2(arr) {
  _quickSort2(arr, 0, arr.length-1);
}
function _quickSort2(arr, l, r) {
  if(r-l <= 15) {
    _insertion(arr, l, r);
    return;
  }
  let p = _partition2(arr, l, r);
  _quickSort2(arr, l, p-1);
  _quickSort2(arr, p+1, r);
}

function _partition2(arr, l, r) {
  let i = l+1, j = r, temp;
  let v = arr[l];
  while (true) {
    while (i <= r && arr[i] < v) {
      i += 1;
    }
    while (j >= l+1 && arr[j] > v) {
      j -= 1;
    }
    if (i > j) {
      break;
    }
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i += 1;
    j -= 1;
  }
  arr[l] = arr[j];
  arr[j] = v;
  return j;
}

//================3 way quick sort works better on array with many duplicated items ==============//
function quickSort3(arr) {
  _quickSort3(arr, 0, arr.length-1);
}
function _quickSort3(arr, l, r) {
  if(r-l <= 15) {
    _insertion(arr, l, r);
    return;
  }
  let lt = l, gt = r+1, i = l+1, temp;
  let idx = Math.floor(Math.random()*(r-l+1)+l);
  temp = arr[l];
  arr[l] = arr[idx];
  arr[idx] = temp;
  let v = arr[l];
  while (i < gt) {
    if (arr[i] < v) {
      temp = arr[i];
      arr[i] = arr[lt];
      arr[lt] = temp;
      i += 1;
      lt += 1; 
    } else if (arr[i] > v) {
      temp = arr[gt-1];
      arr[gt-1] = arr[i];
      arr[i] = temp;
      gt -= 1;
    } else {
      i += 1;
    }
  }
  arr[l] = arr[lt];
  arr[lt] = v;
  _quickSort3(arr, l, lt-1);
  _quickSort3(arr, gt, r);
}

//===============================
function isSorted(arr) {
  // for (let i=1; i < arr.length; i++) {
  //   if (arr[i] < arr[i-1]) {
  //     return false;
  //   }
  // }
  // return true;
  return !arr.some( (item, idx) => arr[idx+1] < item );
}


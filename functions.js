function kiem_tra_ma_nuoc_My (str) {
    var regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;
    return regexp.test(str)? true : false;
}

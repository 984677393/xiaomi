/**
 * Created by pl on 2017/9/12.
 */
// var mima2 = document.getElementById('inputpassword2').value();
// var tishi2 = document.getElementById('sure2');

function Display2() {document.getElementById('sure2').style.display = "block";};
function Display3() {document.getElementById('sure3').style.display = "block";};

function Confirm_pw() {
  var mima1 = document.getElementById('inputpassword1').value;
  var tishi2 = document.getElementById('sure2');
  var len = mima1.length; //获取长度作为判断条件
  var reg = new RegExp(/\w/);//匹配合法字符
  if (reg.test(mima1)) {
    if (len>=8&&len<=16) {
      tishi2.innerHTML = "密码格式正确";
      tishi2.style.color = "green";
    }
    else {
      tishi2.style.color = "red";
      tishi2.innerHTML = "密码长度要在8~16字符";
    };
  }

  else {
    tishi2.style.color = "red";
    tishi2.innerHTML = "请输入合法字符";
  };
};


function Confirm_cpw() {
  var mima1 = document.getElementById('inputpassword1').value;
  var mima2 = document.getElementById('inputpassword2').value;
  var tishi3 = document.getElementById('sure3');
  var len = mima2.length;
  var reg = new RegExp(/\w/);//匹配合法字符
  if (reg.test(mima1) && len >= 8 && len <= 16 && mima2 == mima1) {
    tishi3.innerHTML = "密码格式正确";
    tishi3.style.color = "green";
  }
  else {
    tishi3.innerHTML = "密码格式错误";
    tishi3.style.color = "red" ;
  };
};

  function tijiao() {
  var mima1 = document.getElementById('inputpassword1').value;
  var mima2 = document.getElementById('inputpassword2').value;
  var len2 = mima1.length;
  var len3 = mima2.length;
  var reg = new RegExp(/\w/);//匹配合法字符
  if(len2>=8&&len2<=16&&reg.test(mima1) && reg.test(mima2) && len3 >= 8 && len3 <= 16 && mima2 == mima1)
  {
   alert('设置成功！');
    var mima1 = $('#inputpassword1').val();
    store.update('keyPassword',mima1);
    store.update('keyAA',true);
    console.log(mima1);
    window.location.href="../小米首页/index.html";
    console.log(store.get('keyAA'))
  }
  else{
    alert('请输入正确密码！');
  };
};

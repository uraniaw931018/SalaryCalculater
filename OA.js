function total(){
  //sal1和sal2分别记录获取到的“岗位工资”和"绩效评分"
  var sal1 = document.getElementById("sal1").value;
  var sal2 = document.getElementById("sal2").value;
  // zfb记录获取到的住房公积金缴纳比例
  var zfb = document.getElementById("zfb").value;
  // 首先进行判断，确保sal1和zfb的值是数字
  if(sal1==""||isNaN(sal1)){
    alert("请输入数字!");
  }
  if(zfb==""||isNaN(zfb)){
    alert("请输入数字!");
  }
  // 然后根据sal2的输入，更新sal2的值
  switch (sal2)
  {
    case "A":
    var sal2 = 4000.0;break;
    case "B":
    var sal2 = 2000;break;
    case "C":
    var sal2 = 100;break;
    case "D":
    var sal2 = 0;break;

    default:
    alert("请输入正确绩效评分!");
  }
  // 用res记录单位员工税前工资=岗位工资+绩效工资
  //!!!虽然题目中写了“五险一金只按岗位工资计算”，但是比对实例结果发现是加过绩效工资的
  // 所以此处也以加过绩效工资的值算五险一金
  var res = sal1-(-sal2);
  if(res >= 15108){
    res = 15108;
  }else if(res <=3022){
    res = 3022;
  }
  // 下面值表示五险一金对应的单位缴纳值（2）及个人缴纳值（1）
  var yl2 = res * 0.21;
  var yl1 = res * 0.08;
  var yll2 = res* 0.11;
  var yll1 = res * 0.02;
  var sy2 = res* 0.015;
  var sy1 = res * 0.005;
  var syy2 = res * 0.01;
  var syy1 = 0;
  var gs2 = res * 0.005;
  var gs1 = 0;
  var zf = res * zfb;
  var sum1 = yl1+yll1+sy1+syy1+gs1+zf;
  var sum2 = yl2+yll2+sy2+syy2+gs2+zf;

  // 然后完成显示页面中第一个表格的内容
  document.getElementById("name1").innerHTML=document.getElementById("name").value;

  document.getElementById("yl1").innerHTML = yl1;
  document.getElementById("yl2").innerHTML = yl2;
  document.getElementById("yll1").innerHTML = yll1;
  document.getElementById("yll2").innerHTML = yll2;
  document.getElementById("sy1").innerHTML = sy1;
  document.getElementById("sy2").innerHTML = sy2;
  document.getElementById("syy1").innerHTML = syy1;
  document.getElementById("syy2").innerHTML = syy2;
  document.getElementById("gs1").innerHTML = gs1;
  document.getElementById("gs2").innerHTML = gs2;
  document.getElementById("zf").innerHTML = zf.toFixed(2);
  document.getElementById("zf2").innerHTML = zf.toFixed(2);
  document.getElementById("sum1").innerHTML = sum1.toFixed(2);
  document.getElementById("sum2").innerHTML = sum2.toFixed(2);

  document.getElementById("name2").innerHTML=document.getElementById("name").value;
  document.getElementById("gw").innerHTML=sal1;
  document.getElementById("jx").innerHTML=sal2;
  document.getElementById("wg").innerHTML=sum1.toFixed(2);
  document.getElementById("wd").innerHTML=sum2.toFixed(2);

    // 扣税部分
    // 重新计算res=为个人税前收-3500-五险一金（个人），用这个值来计算税ks
    var res = sal1-(-sal2)-3500-sum1.toFixed(2);
    var ks = 0;
    if(res <= 1500){
      ks = res*0.03;
    }else{
      if(res <= 4500)
        ks = 45 - (-(res-1500)*0.1);
      else{
        if(res <= 9000)
          ks = 345 - (-(res-4500)*0.2);
        else{
          if(res <= 35000)
            ks = 1245 - (-(res-9000)*0.25);
          else{
            if(res <= 55000)
              ks = 7745 - (-(res-35000)*0.3);
            else{
              if(res <= 80000)
                ks = 13745 - (-(res-55000)*0.35);
              else{
                ks = 22495 - (-(res-80000)*0.45);
              }
            }
          }
        }
      }
    }
    // 分别用sq和sh计算税前/税后的值
    var sq = sal1-(-sal2)-sum1.toFixed(2);
    var sh = (sq-ks);
    document.getElementById("sq").innerHTML=sq.toFixed(2);
    document.getElementById("ks").innerHTML=ks.toFixed(2);
    document.getElementById("sh").innerHTML=sh.toFixed(2);
  }
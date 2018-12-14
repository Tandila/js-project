// იქსიკი და ნოლიკი
$(document).ready(function(){

  var znak_user = 'X';
  var znak_comp = 'O';

  var rand_num = Math.round((Math.random() * (9 - 1) + 1));

  if( rand_num > 3 ){
    var znak_comp = 'X';
    var znak_user = 'O';
    $('.cell'+rand_num).text(znak_comp);
  }

  var exit_flag = false;
  var win_user_array = ['123','456','789','147','258','369','159','357'];

  // ვადგენთ მოთამაშის მოგებას
  function check_3_user(znak){
    for (var i = 0; i < 8; i++) {

      var first = 'cell' + win_user_array[i].substr(0,1);
      var second = 'cell' + win_user_array[i].substr(1,1);
      var third = 'cell' + win_user_array[i].substr(2,1);

      if( $('.'+first).text() == znak && $('.'+second).text() == znak && $('.'+third).text() == znak ){
        $('.'+first+',.'+second+',.'+third).css("background-color", "#83e2c3");
        $('.result').text('შენ მოიგე!');
        $('.krestiki_noliki .block').unbind('click');
        exit_flag = true;
      }
    }
  }

// ვადგენთ კომპიუტერის შესაძლებლობას
  function check_2_comp(znak){
    for (var i = 0; i < 8; i++) {

      var first = 'cell' + win_user_array[i].substr(0,1);
      var second = 'cell' + win_user_array[i].substr(1,1);
      var third = 'cell' + win_user_array[i].substr(2,1);

      if( $('.'+first).text() == znak && $('.'+second).text() == znak && $('.'+third).text() == '' && exit_flag == false ){
        $('.'+third).text(znak);
        $('.'+first+',.'+second+',.'+third).css("background-color", "#EF7C7C");
        $('.result').text('შენ წააგე!');
        $('.krestiki_noliki .block').unbind('click');
        exit_flag = true;
      }

      if( $('.'+first).text() == znak && $('.'+second).text() == '' && $('.'+third).text() == znak && exit_flag == false ){
        $('.'+second).text(znak);
        $('.'+first+',.'+second+',.'+third).css("background-color", "#EF7C7C");
        $('.result').text('შენ წააგე!');
        $('.krestiki_noliki .block').unbind('click');
        exit_flag = true;
      }

      if( $('.'+first).text() == '' && $('.'+second).text() == znak && $('.'+third).text() == znak && exit_flag == false ){
        $('.'+first).text(znak);
        $('.'+first+',.'+second+',.'+third).css("background-color", "#EF7C7C");
        $('.result').text('შენ წააგე!');
        $('.krestiki_noliki .block').unbind('click');
        exit_flag = true;
      }
    }
  }

  //კომპიუტერის სვლის დადგენა
  function check_2_user(znak){

    for (var i = 0; i < 8; i++) {

      var first = 'cell' + win_user_array[i].substr(0,1);
      var second = 'cell' + win_user_array[i].substr(1,1);
      var third = 'cell' + win_user_array[i].substr(2,1);


      if( exit_flag == false ){
        if( $('.'+first).text() == znak && $('.'+second).text() == znak && $('.'+third).text() == '' ){
          $('.'+third).text(znak_comp);
          exit_flag = true;
        }
      }

      if( exit_flag == false ){
        if( $('.'+first).text() == znak && $('.'+second).text() == '' && $('.'+third).text() == znak ){
          $('.'+second).text(znak_comp);
          exit_flag = true;
        }
      }

      if( $('.'+first).text() == '' && $('.'+second).text() == znak && $('.'+third).text() == znak ){
        $('.'+first).text(znak_comp);
        exit_flag = true;
      }

      if(exit_flag) break;
    }
  }

  $('.krestiki_noliki .block').click(function(){

    //თუ ცარელაა -->
    if( $(this).text() == '' ){
      $(this).text(znak_user);
      check_3_user(znak_user);
      check_2_comp(znak_comp);
      check_2_user(znak_user);

      if( exit_flag == false ){
        for (var i = 1; i < 10; i++) {
          if( $('.cell'+i).text() == '' ){
            $('.cell'+i).text(znak_comp);
            break;
          }
        }
      }else exit_flag = false;


    }
  });
});
// !იქსიკი და ნოლიკი
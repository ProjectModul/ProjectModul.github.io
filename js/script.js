$(document).ready(function(){
    $('.features__carousel').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/arrow_right.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: false,
                    arrows: false
                }
            }
        ]
    });
    
    $('ul.methods__tabs').on('click', 'li:not(.methods__tab_active)', function() {
        $(this)
          .addClass('methods__tab_active').siblings().removeClass('methods__tab_active')
          .closest('div.container').find('div.methods__content').removeClass('methods__content_active').eq($(this).index()).addClass('methods__content_active');
      });


      function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.exercises-item__content').eq(i).toggleClass('exercises-item__content_active');
                $('.exercises-item__list').eq(i).toggleClass('exercises-item__list_active')
            })
        });
      };
      toggleSlide('.exercises-item__link');
      toggleSlide('.exercises-item__back');
 


      let test = document.querySelector('#test');

      let questions = [
          {
              text: '',
              right: '2',
          },
          {
            text: '',
            right: '-0,5',
        },
        {
            text: '',
            right: '-72',
        },
        {
            text: '',
            right: '1',
        },
        {
            text: '',
            right: '7',
        },
        {
          text: '',
          right: '7,75',
      },
      {
          text: '',
          right: '3',
      },
      {
          text: '',
          right: '2',
      },
      {
        text: '',
        right: '15',
    },
    {
        text: '',
        right: '3',
    },
    {
        text: '',
        right: '9',
    },
      ];
      
      
      for (let question of questions) {
          let div = document.createElement('div');
          test.appendChild(div);
          
          let p = document.createElement('p');
          p.innerHTML = question.text;
          div.appendChild(p);
          
          let input = document.createElement('input');
          input.dataset.right = question.right;
          div.appendChild(input);
      }
      
      let button = document.querySelector('#button');
      button.addEventListener('click', function() {
          let inputs = document.querySelectorAll('#test input');
          
          for (let input of inputs) {
              input.classList.remove('correct');
              input.classList.remove('incorrect');
              
              if (input.value == input.dataset.right) {
                  input.classList.add('correct');
              } else {
                  input.classList.add('incorrect');
              }
          }
      });



 
})
let monsterData, userInput;

const $title = $('#name');
const $year = $('#description');
const $rated = $('#drops');
const $input = $('input[type="text"]');

$('form').on('submit', handleGetData);

function handleGetData(event) {
    event.preventDefault();
       // calling preventDefault() on a 'submit' event will prevent a page refresh  
    userInput = $input.val();
      // getting the user input
    $.ajax({
        url:'https://botw-compendium.herokuapp.com/api/v2/entry/' + userInput
      }).then(
        (data) => {
         monsterData = data.data;
         console.log(data)
         render();
        },
        (error) => {
         console.log('bad request', error);
        }
    );    
}

function render() {
    $title.text(monsterData.name);
    $year.text(monsterData.description);
    $rated.text(monsterData.drops);
 }
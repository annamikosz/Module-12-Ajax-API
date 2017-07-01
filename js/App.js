var baseUrl = 'https://kodilla.com/pl/bootcamp-api',
  myHeaders = {
    'X-Client-Id': '1914',
    'X-Auth-Token': 'c2950daac6dc673973f44e9886e1533c'
  };

$.ajaxSetup({
  headers: myHeaders
});

$.ajax({
  url: baseUrl + '/board',
  method: 'GET',
  success: function(response) {
    setupColumns(response.columns);
  }
});

//CREATE COLUMN
function setupColumns(columns) {
  columns.forEach(function (column) {
    var col = new Column(column.id, column.name);
    board.createColumn(col);
    setupCards(col, column.cards);
  });
}

//CARDS IN COLUMN
function setupCards(col, cards) {
  cards.forEach(function (card) {
    var card = new Card(card.id, card.name, card.bootcamp_kanban_column_id);
    col.createCard(card);
  });
}

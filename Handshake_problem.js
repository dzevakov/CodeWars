// Cmn=n!/((n−m)!⋅m!), n - общая выборка, m - количество сочетаемых компонентов.
function getParticipants(handshakes){
    if(handshakes === 0) {
      return 1;
    }
    let res = 0,
        n = 1;
    while(handshakes > res) {
      res = res + n - 1;
      n++;
    }
    return n - 1;
  }
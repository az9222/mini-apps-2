import React from 'react';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttomImageOnBomb: '',
      buttonImageOnceNearBombA: '',
      buttonImageOnceNearBombB: '',
      buttonImageTwiceNearBombC: '',
      buttonImageOnceNearBombD: '',
      buttonImageTwiceNearBombE: '',
      buttonImageOnceNearBombF: '',
      buttonImageTwiceNearBombF: '',
      buttonImageOnceNearBombE: '',
      buttonImageOnceNearBombG: '',
      buttonImageTwiceNearBombG: '',
      buttonImageOnceNearBombH: '',
      buttonImageOnceNearBombI: '',
      noBombA: '',
      noBombB: '',
      noBombC: '',
      noBombD: '',
      noBombE: '',
      noBombF: '',
      noBombG: '',
      noBombH: '',
      noBombI: '',
      noBombJ: '',
      noBombK: '',
      noBombL: '',
      noBombM: '',
      noBombN: '',
      noBombO: '',
      noBombP: '',
      noBombQ: '',
      noBombR: '',
      noBombS: '',
      noBombT: '',
      noBombU: '',
      noBombV: '',
      noBombW: '',
      noBombX: '',
      noBombY: '',
      noBombZ: '',
      noBomb1: '',
      noBomb2: '',
      noBomb3: '',
      noBomb4: '',
      noBomb5: '',
      noBomb6: '',
      noBomb7: '',
      noBomb8: '',
      noBomb9: '',
      noBomb10: '',
      noBomb11: '',
      noBomb12: '',
      noBomb13: '',
      noBomb14: '',
    }
    this.onClickBomb = this.onClickBomb.bind(this);
    this.onClickNearBombOnceA = this.onClickNearBombOnceA.bind(this);
    this.onClickNearBombOnceB = this.onClickNearBombOnceB.bind(this);
    this.onClickNearBombOnceD = this.onClickNearBombOnceD.bind(this);
    this.onClickNearBombOnceF = this.onClickNearBombOnceF.bind(this);
    this.onClickNearBombOnceE = this.onClickNearBombOnceE.bind(this);
    this.onClickNearBombOnceG = this.onClickNearBombOnceG.bind(this);
    this.onClickNearBombOnceH = this.onClickNearBombOnceH.bind(this);
    this.onClickNearBombOnceI = this.onClickNearBombOnceI.bind(this);
    this.onClickNoBombA = this.onClickNoBombA.bind(this);
    this.onClickNoBombB = this.onClickNoBombB.bind(this);
    this.onClickNoBombC = this.onClickNoBombC.bind(this);
    this.onClickNoBombD = this.onClickNoBombD.bind(this);
    this.onClickNoBombE = this.onClickNoBombE.bind(this);
    this.onClickNoBombF = this.onClickNoBombF.bind(this);
    this.onClickNoBombG = this.onClickNoBombG.bind(this);
    this.onClickNoBombH = this.onClickNoBombH.bind(this);
    this.onClickNoBombI = this.onClickNoBombI.bind(this);
    this.onClickNoBombJ = this.onClickNoBombJ.bind(this);
    this.onClickNoBombK = this.onClickNoBombK.bind(this);
    this.onClickNoBombL = this.onClickNoBombL.bind(this);
    this.onClickNoBombM = this.onClickNoBombM.bind(this);
    this.onClickNoBombN = this.onClickNoBombN.bind(this);
    this.onClickNoBombO = this.onClickNoBombO.bind(this);
    this.onClickNoBombP = this.onClickNoBombP.bind(this);
    this.onClickNoBombQ = this.onClickNoBombQ.bind(this);
    this.onClickNoBombR = this.onClickNoBombR.bind(this);
    this.onClickNoBombS = this.onClickNoBombS.bind(this);
    this.onClickNoBombT = this.onClickNoBombT.bind(this);
    this.onClickNoBombU = this.onClickNoBombU.bind(this);
    this.onClickNoBombV = this.onClickNoBombV.bind(this);
    this.onClickNoBombW = this.onClickNoBombW.bind(this);
    this.onClickNoBombX = this.onClickNoBombX.bind(this);
    this.onClickNoBombY = this.onClickNoBombY.bind(this);
    this.onClickNoBombZ = this.onClickNoBombZ.bind(this);
    this.onClickNoBomb1 = this.onClickNoBomb1.bind(this);
    this.onClickNoBomb2 = this.onClickNoBomb2.bind(this);
    this.onClickNoBomb3 = this.onClickNoBomb3.bind(this);
    this.onClickNoBomb4 = this.onClickNoBomb4.bind(this);
    this.onClickNoBomb5 = this.onClickNoBomb5.bind(this);
    this.onClickNoBomb6 = this.onClickNoBomb6.bind(this);
    this.onClickNoBomb7 = this.onClickNoBomb7.bind(this);
    this.onClickNoBomb8 = this.onClickNoBomb8.bind(this);
    this.onClickNoBomb9 = this.onClickNoBomb9.bind(this);
    this.onClickNoBomb10 = this.onClickNoBomb10.bind(this);
    this.onClickNoBomb11 = this.onClickNoBomb11.bind(this);
    this.onClickNoBomb12 = this.onClickNoBomb12.bind(this);
    this.onClickNoBomb13 = this.onClickNoBomb13.bind(this);
    this.onClickNoBomb14 = this.onClickNoBomb14.bind(this);
  }

  onClickBomb(e) {
    e.preventDefault();
    if (e.target.name === "bomb") {
      this.setState({
        buttonImageOnBomb: 'X'
      })
    }
    alert('Game Over');
  };

  onClickNearBombOnceA(e) {
    e.preventDefault();
    if (e.target.name === "1NextToBombA") {
      this.setState({
        buttonImageOnceNearBombA: 1
      });
    };
  };

  onClickNearBombOnceB(e) {
    e.preventDefault();
    if (e.target.name === "1NextToBombB") {
      this.setState({
        buttonImageOnceNearBombB: 1,
        buttonImageTwiceNearBombC: 2
      });
    }
  };

  onClickNearBombOnceD(e) {
    e.preventDefault();
    if (e.target.name === "1NextToBombD") {
      this.setState({
        buttonImageOnceNearBombD: 1,
        buttonImageTwiceNearBombE: 2
      });
    };
  };

  onClickNearBombOnceF(e) {
    e.preventDefault();
    if (e.target.name === "1NextToBombF") {
      this.setState({
        buttonImageOnceNearBombF: 1,
        buttonImageTwiceNearBombF: 2
      });
    };
  };

  onClickNearBombOnceE(e) {
    e.preventDefault();
    if (e.target.name === "1NextToBombE") {
      this.setState({
        buttonImageOnceNearBombE: 1
      });
    };
  };

  onClickNearBombOnceG(e) {
    e.preventDefault();
    if (e.target.name === "1NextToBombG") {
      this.setState({
        buttonImageOnceNearBombG: 1,
        buttonImageTwiceNearBombG: 2
      });
    };
  };

  onClickNearBombOnceH(e) {
    e.preventDefault();
    if (e.target.name === "1NextToBombH") {
      this.setState({
        buttonImageOnceNearBombH: 1
      });
    };
  };

  onClickNearBombOnceI(e) {
    e.preventDefault();
    if (e.target.name === "1NextToBombI") {
      this.setState({
        buttonImageOnceNearBombI: 1
      });
    };
  }

  onClickNoBombA(e) {
    e.preventDefault();
    this.setState({
      noBombA: '☺'
    });
  };

  onClickNoBombB(e) {
    e.preventDefault();
    this.setState({
      noBombB: '☺'
    });
  };

  onClickNoBombC(e) {
    e.preventDefault();
    this.setState({
      noBombC: '☺'
    });
  };

  onClickNoBombD(e) {
    e.preventDefault();
    this.setState({
      noBombD: '☺'
    });
  };

  onClickNoBombE(e) {
    e.preventDefault();
    this.setState({
      noBombE: '☺'
    });
  };

  onClickNoBombF(e) {
    e.preventDefault();
    this.setState({
      noBombF: '☺'
    });
  };

  onClickNoBombG(e) {
    e.preventDefault();
    this.setState({
      noBombG: '☺'
    });
  };

  onClickNoBombH(e) {
    e.preventDefault();
    this.setState({
      noBombH: '☺'
    });
  };

  onClickNoBombI(e) {
    e.preventDefault();
    this.setState({
      noBombI: '☺'
    });
  };

  onClickNoBombJ(e) {
    e.preventDefault();
    this.setState({
      noBombJ: '☺'
    });
  };

  onClickNoBombK(e) {
    e.preventDefault();
    this.setState({
      noBombK: '☺'
    });
  };

  onClickNoBombL(e) {
    e.preventDefault();
    this.setState({
      noBombL: '☺'
    });
  };

  onClickNoBombM(e) {
    e.preventDefault();
    this.setState({
      noBombM: '☺'
    });
  };

  onClickNoBombN(e) {
    e.preventDefault();
    this.setState({
      noBombN: '☺'
    });
  };

  onClickNoBombO(e) {
    e.preventDefault();
    this.setState({
      noBombO: '☺'
    });
  };

  onClickNoBombP(e) {
    e.preventDefault();
    this.setState({
      noBombP: '☺'
    });
  };

  onClickNoBombQ(e) {
    e.preventDefault();
    this.setState({
      noBombQ: '☺'
    });
  };

  onClickNoBombR(e) {
    e.preventDefault();
    this.setState({
      noBombR: '☺'
    });
  };

  onClickNoBombS(e) {
    e.preventDefault();
    this.setState({
      noBombS: '☺'
    });
  };

  onClickNoBombT(e) {
    e.preventDefault();
    this.setState({
      noBombT: '☺'
    });
  };

  onClickNoBombU(e) {
    e.preventDefault();
    this.setState({
      noBombU: '☺'
    });
  };

  onClickNoBombV(e) {
    e.preventDefault();
    this.setState({
      noBombV: '☺'
    });
  };

  onClickNoBombW(e) {
    e.preventDefault();
    this.setState({
      noBombW: '☺'
    });
  };

  onClickNoBombX(e) {
    e.preventDefault();
    this.setState({
      noBombX: '☺'
    });
  };

  onClickNoBombY(e) {
    e.preventDefault();
    this.setState({
      noBombY: '☺'
    });
  };

  onClickNoBombZ(e) {
    e.preventDefault();
    this.setState({
      noBombZ: '☺'
    });
  };
  

  onClickNoBomb1(e) {
    e.preventDefault();
    this.setState({
      noBomb1: '☺'
    });
  };

  onClickNoBomb2(e) {
    e.preventDefault();
    this.setState({
      noBomb2: '☺'
    });
  };

  onClickNoBomb3(e) {
    e.preventDefault();
    this.setState({
      noBomb3: '☺'
    });
  };

  onClickNoBomb4(e) {
    e.preventDefault();
    this.setState({
      noBomb4: '☺'
    });
  };

  onClickNoBomb5(e) {
    e.preventDefault();
    this.setState({
      noBomb5: '☺'
    });
  };

  onClickNoBomb6(e) {
    e.preventDefault();
    this.setState({
      noBomb6: '☺'
    });
  };

  onClickNoBomb7(e) {
    e.preventDefault();
    this.setState({
      noBomb7: '☺'
    });
  };

  onClickNoBomb8(e) {
    e.preventDefault();
    this.setState({
      noBomb8: '☺'
    });
  };

  onClickNoBomb9(e) {
    e.preventDefault();
    this.setState({
      noBomb9: '☺'
    });
  };

  onClickNoBomb10(e) {
    e.preventDefault();
    this.setState({
      noBomb10: '☺'
    });
  };

  onClickNoBomb11(e) {
    e.preventDefault();
    this.setState({
      noBomb11: '☺'
    });
  };

  onClickNoBomb12(e) {
    e.preventDefault();
    this.setState({
      noBomb12: '☺'
    });
  };

  onClickNoBomb13(e) {
    e.preventDefault();
    this.setState({
      noBomb13: '☺'
    });
  };

  onClickNoBomb14(e) {
    e.preventDefault();
    this.setState({
      noBomb14: '☺'
    });
  };

  render(){
    return (
      <div>
        <button className="button" name="1NextToBombA" onClick = {(e) => {this.onClickNearBombOnceA(e)}}> 
          {this.state.buttonImageOnceNearBombA}  
        </button>
        <button className="button" name="bomb" onClick={(e) => {this.onClickBomb(e)}}>   
          {this.state.buttonImageOnBomb}
        </button>
        <button className="button" name="1NextToBombA" onClick = {(e) => {this.onClickNearBombOnceA(e)}}>   
          {this.state.buttonImageOnceNearBombA}
        </button>
        <button className="button" onClick = {(e) => {this.onClickNoBombB(e)}}>
          {this.state.noBombB} 
        </button>
        <button className="button" onClick = {(e) => {this.onClickNoBombA(e)}}>
          {this.state.noBombA} 
        </button>
        <button className="button" name="1NextToBombB" onClick = {(e) => {this.onClickNearBombOnceB(e)}}> 
          {this.state.buttonImageOnceNearBombB}  
        </button>
        <button className="button" name="1NextToBombB" onClick = {(e) => {this.onClickNearBombOnceB(e)}}> 
          {this.state.buttonImageOnceNearBombB}  
        </button>
        <button className="button" name="1NextToBombB" onClick = {(e) => {this.onClickNearBombOnceB(e)}}> 
          {this.state.buttonImageOnceNearBombB}  
        </button>
        <button className="button" onClick = {(e) => {this.onClickNoBombC(e)}}>
          {this.state.noBombC} 
        </button>
        <button className="button" onClick = {(e) => {this.onClickNoBombD(e)}}>
          {this.state.noBombD} 
        </button>
        <br />
        <button className="button" name="1NextToBombA" onClick = {(e) => {this.onClickNearBombOnceA(e)}}>   
          {this.state.buttonImageOnceNearBombA}
        </button>
        <button className="button" name="1NextToBombA" onClick = {(e) => {this.onClickNearBombOnceA(e)}}>  
          {this.state.buttonImageOnceNearBombA} 
        </button>
        <button className="button" name="1NextToBombA" onClick = {(e) => {this.onClickNearBombOnceA(e)}}>  
          {this.state.buttonImageOnceNearBombA} 
        </button>
        <button className="button" onClick = {(e) => {this.onClickNoBombE(e)}}>
          {this.state.noBombE} 
        </button>
        <button className="button" onClick = {(e) => {this.onClickNoBombF(e)}}>
          {this.state.noBombF} 
        </button>
        <button className="button" name="1NextToBombB" onClick = {(e) => {this.onClickNearBombOnceB(e)}}> 
          {this.state.buttonImageOnceNearBombB}  
        </button>
        <button className="button" name="bomb" onClick={(e) => {this.onClickBomb(e)}}>   
          {this.state.buttonImageOnBomb}
        </button>
        <button className="button" name="1NextToBombB" onClick = {(e) => {this.onClickNearBombOnceB(e)}}> 
          {this.state.buttonImageTwiceNearBombE}  
        </button>
        <button className="button" name="1NextToBombD" onClick = {(e) => {this.onClickNearBombOnceD(e)}}> 
          {this.state.buttonImageOnceNearBombD}
        </button>
        <button className="button" name="1NextToBombD" onClick = {(e) => {this.onClickNearBombOnceD(e)}}> 
          {this.state.buttonImageOnceNearBombD}
        </button>
        <br />
        <button className="button" onClick = {(e) => {this.onClickNoBombG(e)}}>
          {this.state.noBombG} 
        </button>
        <button className="button" onClick = {(e) => {this.onClickNoBombH(e)}}>
          {this.state.noBombH} 
        </button>
        <button className="button" onClick = {(e) => {this.onClickNoBombI(e)}}>
          {this.state.noBombI} 
        </button>
        <button className="button" onClick = {(e) => {this.onClickNoBombJ(e)}}>
          {this.state.noBombJ} 
        </button>
        <button className="button" onClick = {(e) => {this.onClickNoBombK(e)}}>
          {this.state.noBombK} 
        </button>
        <button className="button" name="1NextToBombB" onClick = {(e) => {this.onClickNearBombOnceB(e)}}> 
          {this.state.buttonImageOnceNearBombB}  
        </button>
        <button className="button" name="1NextToBombB" onClick = {(e) => {this.onClickNearBombOnceB(e)}}> 
          {this.state.buttonImageOnceNearBombB}  
        </button>
        <button className="button" name="2NextToBombC" onClick = {(e) => {this.onClickNearBombOnceB(e)}}> 
          {this.state.buttonImageTwiceNearBombC}
        </button>
        <button className="button" name="bomb" onClick={(e) => {this.onClickBomb(e)}}>   
          {this.state.buttonImageOnBomb}
        </button>
        <button className="button" name="1NextToBombD" onClick = {(e) => {this.onClickNearBombOnceD(e)}}> 
          {this.state.buttonImageOnceNearBombD}
        </button>
        <br />
        <button className="button" onClick = {(e) => {this.onClickNoBombL(e)}}>
          {this.state.noBombL} 
        </button>
        <button className="button" name="1NextToBombF" onClick={(e) => {this.onClickNearBombOnceF(e)}}>
          {this.state.buttonImageOnceNearBombF}
        </button>
        <button className="button" name="1NextToBombF" onClick={(e) => {this.onClickNearBombOnceF(e)}}>
          {this.state.buttonImageOnceNearBombF}
        </button>
        <button className="button" name="1NextToBombF" onClick={(e) => {this.onClickNearBombOnceF(e)}}>
          {this.state.buttonImageOnceNearBombF}
        </button>
        <button className="button" onClick = {(e) => {this.onClickNoBombM(e)}}>
          {this.state.noBombM} 
        </button>
        <button className="button" onClick = {(e) => {this.onClickNoBombN(e)}}>
          {this.state.noBombN} 
        </button>
        <button className="button" onClick = {(e) => {this.onClickNoBombO(e)}}>
          {this.state.noBombO} 
        </button>
        <button className="button" name="2NextToBombC" onClick = {(e) => {this.onClickNearBombOnceB(e)}}> 
          {this.state.buttonImageTwiceNearBombC}
        </button>
        <button className="button" name="1NextToBombD" onClick = {(e) => {this.onClickNearBombOnceD(e)}}> 
          {this.state.buttonImageOnceNearBombD}
        </button>
        <button className="button" name="1NextToBombD" onClick = {(e) => {this.onClickNearBombOnceD(e)}}> 
          {this.state.buttonImageOnceNearBombD}
        </button>
        <br />
        <button className="button" onClick = {(e) => {this.onClickNoBombP(e)}}>
          {this.state.noBombP} 
        </button>
        <button className="button" name="1NextToBombF" onClick={(e) => {this.onClickNearBombOnceF(e)}}>
          {this.state.buttonImageOnceNearBombF}
        </button>
        <button className="button" name="bomb" onClick={(e) => {this.onClickBomb(e)}}>   
          {this.state.buttonImageOnBomb}
        </button>
        <button className="button" name="1NextToBombF" onClick={(e) => {this.onClickNearBombOnceF(e)}}>
          {this.state.buttonImageOnceNearBombF}
        </button>
        <button className="button" onClick = {(e) => {this.onClickNoBombQ(e)}}>
          {this.state.noBombQ} 
        </button>
        <button className="button" name="1NextToBombE" onClick={(e) => {this.onClickNearBombOnceE(e)}}> 
          {this.state.buttonImageOnceNearBombE}
        </button>
        <button className="button" name="1NextToBombE" onClick={(e) => {this.onClickNearBombOnceE(e)}}> 
          {this.state.buttonImageOnceNearBombE}
        </button>
        <button className="button" name="1NextToBombE" onClick={(e) => {this.onClickNearBombOnceE(e)}}> 
          {this.state.buttonImageOnceNearBombE}
        </button>
        <button className="button" onClick = {(e) => {this.onClickNoBombR(e)}}>
          {this.state.noBombR} 
        </button>
        <button className="button" onClick = {(e) => {this.onClickNoBombS(e)}}>
          {this.state.noBombS} 
        </button>
        <br />
        <button className="button" name="1NextToBombF" onClick={(e) => {this.onClickNearBombOnceF(e)}}>
          {this.state.buttonImageTwiceNearBombF}
        </button>
        <button className="button" name="1NextToBombF" onClick={(e) => {this.onClickNearBombOnceF(e)}}>
          {this.state.buttonImageTwiceNearBombF}
        </button>
        <button className="button" name="1NextToBombF" onClick={(e) => {this.onClickNearBombOnceF(e)}}>
          {this.state.buttonImageTwiceNearBombF}
        </button>
        <button className="button" name="1NextToBombF" onClick={(e) => {this.onClickNearBombOnceF(e)}}>
          {this.state.buttonImageOnceNearBombF}
        </button>
        <button className="button" onClick = {(e) => {this.onClickNoBombT(e)}}>
          {this.state.noBombT} 
        </button>
        <button className="button" name="1NextToBombE" onClick={(e) => {this.onClickNearBombOnceE(e)}}> 
          {this.state.buttonImageOnceNearBombE}
        </button>
        <button className="button" name="bomb" onClick={(e) => {this.onClickBomb(e)}}>   
          {this.state.buttonImageOnBomb}
        </button>
        <button className="button" name="1NextToBombE" onClick={(e) => {this.onClickNearBombOnceE(e)}}> 
          {this.state.buttonImageOnceNearBombE}
        </button>
        <button className="button" onClick = {(e) => {this.onClickNoBombU(e)}}>
          {this.state.noBombU} 
        </button>
        <button className="button" onClick = {(e) => {this.onClickNoBombV(e)}}>
          {this.state.noBombV} 
        </button>
        <br />
        <button className="button" name="1NextToBombG" onClick={(e) => {this.onClickNearBombOnceG(e)}}> 
          {this.state.buttonImageOnceNearBombG}
        </button>
        <button className="button" name="bomb" onClick={(e) => {this.onClickBomb(e)}}>   
          {this.state.buttonImageOnBomb}
        </button>
        <button className="button" name="1NextToBombG" onClick={(e) => {this.onClickNearBombOnceG(e)}}> 
          {this.state.buttonImageOnceNearBombG}
        </button>
        <button className="button" onClick = {(e) => {this.onClickNoBombW(e)}}>
          {this.state.noBombW} 
        </button>
        <button className="button" onClick = {(e) => {this.onClickNoBombX(e)}}>
          {this.state.noBombX} 
        </button>
        <button className="button" name="1NextToBombE" onClick={(e) => {this.onClickNearBombOnceE(e)}}> 
          {this.state.buttonImageOnceNearBombE}
        </button>
        <button className="button" name="1NextToBombE" onClick={(e) => {this.onClickNearBombOnceE(e)}}> 
          {this.state.buttonImageOnceNearBombE}
        </button>
        <button className="button" name="1NextToBombE" onClick={(e) => {this.onClickNearBombOnceE(e)}}> 
          {this.state.buttonImageOnceNearBombE}
        </button>
        <button className="button" onClick = {(e) => {this.onClickNoBombY(e)}}>
          {this.state.noBombY} 
        </button>
        <button className="button" onClick = {(e) => {this.onClickNoBombZ(e)}}>
          {this.state.noBombZ} 
        </button>
        <br />
        <button className="button" name="1NextToBombG" onClick={(e) => {this.onClickNearBombOnceG(e)}}> 
          {this.state.buttonImageOnceNearBombG}
        </button>
        <button className="button" name="1NextToBombG" onClick={(e) => {this.onClickNearBombOnceG(e)}}> 
          {this.state.buttonImageTwiceNearBombG}
        </button>
        <button className="button" name="1NextToBombG" onClick={(e) => {this.onClickNearBombOnceG(e)}}> 
          {this.state.buttonImageTwiceNearBombG}
        </button>
        <button className="button" name="1NextToBombH" onClick={(e) => {this.onClickNearBombOnceH(e)}}> 
          {this.state.buttonImageOnceNearBombH}
        </button>
        <button className="button" onClick = {(e) => {this.onClickNoBomb1(e)}}>
          {this.state.noBomb1} 
        </button>
        <button className="button" onClick = {(e) => {this.onClickNoBomb2(e)}}>
          {this.state.noBomb2} 
        </button>
        <button className="button" onClick = {(e) => {this.onClickNoBomb3(e)}}>
          {this.state.noBomb3} 
        </button>
        <button className="button" onClick = {(e) => {this.onClickNoBomb4(e)}}>
          {this.state.noBomb4} 
        </button>
        <button className="button" onClick = {(e) => {this.onClickNoBomb5(e)}}>
          {this.state.noBomb5} 
        </button>
        <button className="button" onClick = {(e) => {this.onClickNoBomb6(e)}}>
          {this.state.noBomb6} 
        </button>
        <br />
        <button className="button" onClick = {(e) => {this.onClickNoBomb7(e)}}>
          {this.state.noBomb7} 
        </button>
        <button className="button" name="1NextToBombH" onClick={(e) => {this.onClickNearBombOnceH(e)}}> 
          {this.state.buttonImageOnceNearBombH}
        </button>
        <button className="button" name="bomb" onClick={(e) => {this.onClickBomb(e)}}>   
          {this.state.buttonImageOnBomb}
        </button>
        <button className="button" name="1NextToBombH" onClick={(e) => {this.onClickNearBombOnceH(e)}}> 
          {this.state.buttonImageOnceNearBombH}
        </button>
        <button className="button" onClick = {(e) => {this.onClickNoBomb8(e)}}>
          {this.state.noBomb8} 
        </button>
        <button className="button" onClick = {(e) => {this.onClickNoBomb9(e)}}>
          {this.state.noBomb9} 
        </button>
        <button className="button" onClick = {(e) => {this.onClickNoBomb10(e)}}>
          {this.state.noBomb10} 
        </button>
        <button className="button" name="1NextToBombI" onClick={(e) => {this.onClickNearBombOnceI(e)}}> 
          {this.state.buttonImageOnceNearBombI}
        </button>
        <button className="button" name="1NextToBombI" onClick={(e) => {this.onClickNearBombOnceI(e)}}> 
          {this.state.buttonImageOnceNearBombI}
        </button>
        <button className="button" name="1NextToBombI" onClick={(e) => {this.onClickNearBombOnceI(e)}}> 
          {this.state.buttonImageOnceNearBombI}
        </button>
        <br />
        <button className="button" onClick = {(e) => {this.onClickNoBomb11(e)}}>
          {this.state.noBomb11} 
        </button>
        <button className="button" name="1NextToBombH" onClick={(e) => {this.onClickNearBombOnceH(e)}}> 
          {this.state.buttonImageOnceNearBombH}
        </button>
        <button className="button" name="1NextToBombH" onClick={(e) => {this.onClickNearBombOnceH(e)}}> 
          {this.state.buttonImageOnceNearBombH}
        </button>
        <button className="button" name="1NextToBombH" onClick={(e) => {this.onClickNearBombOnceH(e)}}> 
          {this.state.buttonImageOnceNearBombH}
        </button>
        <button className="button" onClick = {(e) => {this.onClickNoBomb12(e)}}>
          {this.state.noBomb12} 
        </button>
        <button className="button" onClick = {(e) => {this.onClickNoBomb13(e)}}>
        {this.state.noBomb13} 
        </button>
        <button className="button" onClick = {(e) => {this.onClickNoBomb14(e)}}>
          {this.state.noBomb14} 
        </button>
        <button className="button" name="1NextToBombI" onClick={(e) => {this.onClickNearBombOnceI(e)}}> 
          {this.state.buttonImageOnceNearBombI}
        </button>
        <button className="button" name="bomb" onClick={(e) => {this.onClickBomb(e)}}>   
          {this.state.buttonImageOnBomb}
        </button>
        <button className="button" name="1NextToBombI" onClick={(e) => {this.onClickNearBombOnceI(e)}}> 
          {this.state.buttonImageOnceNearBombI}
        </button>
        <br />
      </div>
    )
  }
}

export default Board;
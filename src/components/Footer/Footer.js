import styled from "styled-components";


function Footers() {
    return (
       <FootersStyle>
         <div className="container">
            <footer className="footer">
                <h2 className="footer__title">Movie App</h2>
                <p className="footer__author">Dibuat oleh peTIK Jombang</p>
            </footer>
            </div>
       </FootersStyle>
    );
}

const FootersStyle = styled.div`
  .container {
      background-color: #000000;
      color: #fff;
      padding: 1rem;
      text-align: center;
    }

  .footer__title {
      margin-bottom: 1rem;
    }

  .footer__author {
      margin-bottom: 1rem;
    }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {

}
`


export default Footers;
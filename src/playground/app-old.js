console.log('App.js is running');

const bankDetails = {
  bankName: '',
  accountNum: 23343,
  bankLocation: 'Plumstead',
  staff: 10
};

const userNmae = 'Dope McG';
const userAge = 99;
const userLocation = 'Iceland';

function getLocation(location) {

  if (location) {
    return <p>Bank Location - { location }</p>;
  }
}

const templateTwo = (
  // && will result in only one thing happening
  <div>
    <h1>{ userNmae }</h1>
    <p>Age: { userAge }</p>
    <p>Location: { userLocation }</p>
    <hr/>
    <h2>Bank Name - { bankDetails.bankName ? bankDetails.bankName : 'Not found' }</h2>
    { (bankDetails.staff && bankDetails.staff >= 30) && <p>No of staff - {bankDetails.staff} : Premier Bank</p>}
    <p>Account Number - { bankDetails.accountNum }</p>
    { getLocation(bankDetails.bankLocation) }
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

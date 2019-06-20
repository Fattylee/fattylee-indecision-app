import React from 'react';

const OptionModaltyyy = (props) => (
  <Modal
  ariaHideApp={false}
  onRequestClose={props.handleSelectedOption}
  isOpen={!!props.selectedOption}
  contentLabel="Selected option"
  >
    <h3>Selected option</h3>
    <p>{props.selectedOption}</p>
    <button onClick={props.handleSelectedOption}>Okay</button>
  </Modal>
);


const OptionModal = ({ okay, selectedOption }) => {
  return (
  <div className={'overlay'}>
    <div className={'custom-modal'}>
      <span>Selected option</span>
      <h3>{selectedOption}</h3>
      <div>
      <button style={{visibility: 'hidden'}} onClick={() => okay()}>No</button>
      <button onClick={() => okay()}>Okay</button>
      </div>
    </div>
   </div>
  );
};
export default OptionModal;

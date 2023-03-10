import React from 'react'
import Select from 'react-select'
import { getDatabase, ref, push } from "firebase/database";

const CardInput = () => {

  const NAME = 'name'
  const TEXT = 'text'
  
  const COST = 'cost'
  const REWARD = 'reward'
  const LIFE = 'life'
  const TYPE = 'type'
  const CONTROL = 'control'

  const [selectValue, setSelectValue] = React.useState("")
  const [nameValue, setNameValue] = React.useState("")
  const [textValue, setTextValue] = React.useState("")
  
  const [rewardValue, setRewardValue] = React.useState("")
  const [typeValue, setTypeValue] = React.useState("")
  const [costValue, setCostValue] = React.useState("")
  const [lifeValue, setLifeValue] = React.useState("")
  const [controlValue, setControlValue] = React.useState("")

  const onChange = (option) => {
    setSelectValue(option)
  }

  const db = getDatabase();

  const writeToDatabase = (path, object) => {
    console.log('writetoDatabase')
    push(ref(db, `cards/${path}`), object)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('handleSubmit')
    //needs to be different depending on which type of card it is (path, object have all feilds of that card)
    writeToDatabase('villains', { name: nameValue })
  }

  const options = [
    { value: 'store', 'label': 'Store' },
    { value: 'villain', 'label': 'Villain' },
    { value: 'location', 'label': 'Location' },
    // { value: 'character', 'label': 'Character' },
    { value: 'dark Arts', 'label': 'Dark Arts' }
  ]
  const typeOptions = [
    { value: 'spell', label: 'Spell' },
    { value: 'ally', label: 'Ally' },
    { value: 'item', label: 'Item' }
  ]

  const showOptions = {
    Store: [TYPE, COST],
    Villain: [REWARD, LIFE],
    Location: [CONTROL],
    'Dark Arts': [],
  }

  const handleNameChange = (name) => {
    setNameValue(name.target.value)
  }
  const handleTextChange = (name) => {
    setTextValue(name.target.value)
  }
  const handleCostChange = (name) => {
    setCostValue(name.target.value)
  }
  const handleRewardChange = (name) => {
    setRewardValue(name.target.value)
  }
  const handleLifeChange = (name) => {
    setLifeValue(name.target.value)
  }
  const handleTypeChange = (name) => {
    setTypeValue(name.value)
  }
  const handleControlChange = (name) => {
    setControlValue(name.target.value)
  }
  return (<div>
    <Select options={options} onChange={onChange} />
    <form onSubmit={handleSubmit}>
      <label>
      Name: 
        <input type='text' value={nameValue} onChange={handleNameChange} />
      </label>
      <label>
      Text:  
        <input type='text' value={textValue} onChange={handleTextChange} />
      </label>
      { selectValue.label && showOptions[selectValue.label].includes(COST) ? 
          <label> 
            Cost:  
            <input type='text' value={costValue} onChange={handleCostChange} />
          </label>
        : '' }
        { selectValue.label && showOptions[selectValue.label].includes(REWARD) ? 
          <label> 
            Reward:  
            <input type='text' value={rewardValue} onChange={handleRewardChange} />
          </label>
        : '' }
        { selectValue.label && showOptions[selectValue.label].includes(LIFE) ? 
          <label> 
            Life:  
            <input type='text' value={lifeValue} onChange={handleLifeChange} />
          </label>
        : '' }
        { selectValue.label && showOptions[selectValue.label].includes(TYPE) ? 
          <label> 
            Type:  
            <Select options={typeOptions} onChange={handleTypeChange} />
          </label>
        : '' }
        { selectValue.label && showOptions[selectValue.label].includes(CONTROL) ? 
          <label> 
            Control:  
            <input type='text' value={controlValue} onChange={handleControlChange} />
          </label>
        : '' }
      <input type='submit' value="Submit"/>
    </form>
  </div>);
}

export default CardInput

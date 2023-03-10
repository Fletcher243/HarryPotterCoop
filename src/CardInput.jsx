import React from 'react'
import Select from 'react-select'
import { getDatabase, ref, push } from "firebase/database";

const CardInput = () => {

  const NAME = 'name'
  const TEXT = 'text'
  
  const REWARD = 'reward'
  const LIFE = 'life'
  const TYPE = 'type'
  const COST = 'cost'
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
    DarkArts: [],
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
            <input type='text' value={nameValue} onChange={handleCostChange} />
          </label>
        : '' }
      <input type='submit' value="Submit"/>
    </form>
  </div>);
}

export default CardInput

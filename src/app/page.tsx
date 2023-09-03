'use client'
import { useState } from "react"
import { TodoItem } from "./type/TodoItem";
const Page = () => {
  const [itemImput, setItemImput] = useState ('');
  const [list, setList] = useState<TodoItem[]>([
    { id: 1, label: 'Fazer dever de casa', checked: false },
    { id: 2, label: 'Fazer o bolo', checked: false }
  ]);
  const handleAddButton = () => {
    if (itemImput.trim() === '') return;
    setList([...list,{ id: list.length + 1, label: itemImput, checked:false}])
    setItemImput('');
  }
  const deletarItem = (id: number) => {
    setList(
      list.filter(item => item.id !== id)
      );
  }
  const toggleItem = (id: number) =>{
    let newList = [...list];

  for (let i in newList) {
    if(newList[i].id === id){
      newList[i].checked = !newList[i].checked
    }
  }
     
    setList (newList);
  }
  return (
  <div className="w-screen h-screen flex flex-col items-center text-2xl">
    <h1 className="text-4xl mt-5">Lista de Tarefas</h1>
    <div className="flex w-full max-w-lg my-3 p-4 rounded-md bg-gray-700 border-2 border-gray-300">
      <input
      type="text"
      placeholder="O que deseja fazer?"
      className="flex-1 border border-black p-3 text-2xl text-black rounded-md mr-3"
      value={itemImput}
      onChange={e => setItemImput(e.target.value)}
      />
      <button onClick={handleAddButton}>Adicionar</button>
    </div>
    <p className="my-4">{list.length} Itens na Lista</p>
    <ul className="w-full max-w-lg list-disc pl-5">
      {list.map(item => (
        <li key={item.id}>
          <input onClick={() => toggleItem(item.id)} type="checkbox" checked={item.checked} className="w-6 h-6 mr-3" />
          {item.label} - <button onClick={() => deletarItem(item.id)} className="houver:underline">[ deletar ]</button>
        </li>
      ))}
    </ul>


  </div>
    
  )
}
export default Page;
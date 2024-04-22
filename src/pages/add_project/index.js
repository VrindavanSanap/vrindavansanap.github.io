import { useState } from "react";
import { db } from '../../firebase'
import { doc, setDoc } from "firebase/firestore";
import { confetti } from '@tsparticles/confetti';
export default function Add_project() {
  const empty_form_data = {
    project_name: "",
    project_desc: "",
    demo_link: "",
    source_link: ""
  }
  const [form_data, set_form_data] = useState(empty_form_data)
  const [uploading_project, set_uploading_project] = useState(false)
  const [upload_finished, set_upload_finished] = useState(false)
  function handle_change(e) {
    set_upload_finished(false)
    set_form_data({ ...form_data, [e.target.name]: e.target.value });
  }
  async function handle_upload_click() {
    set_uploading_project(true)
    await setDoc(doc(db, "books", form_data.project_name), form_data);
    // set_form_data(empty_form_data)
    set_uploading_project(false)
    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.75 },

    });
    set_upload_finished(true)
  }

  return (
    <div className="font-mono ml-5 mt-5 ">
      <h1 className="text-5xl">Add Project</h1>
      <div
        className="ml-5 mt-3">
        <div className="mt-2">
          <label htmlFor="project_name">Project Name: </label>
          <input
            onChange={handle_change}
            value={form_data.project_name}
            type="text"
            id="project_name"
            name="project_name"
            className="outline-none border-2 focus:border-blue-500 rounded-md" required />
        </div>

        <div className="mt-2">
          <label htmlFor="project_desc">Project Description: </label>
          <input
            onChange={handle_change}
            value={form_data.project_desc}
            id="project_desc"
            name="project_desc"
            className="outline-none border-2 focus:border-blue-500 rounded-md" required />
        </div>

        <div className="mt-2">
          <label htmlFor="demo_link">Demo link: </label>
          <input
            onChange={handle_change}
            value={form_data.demo_link}
            type="text"
            id="demo_link"
            name="demo_link"
            className="outline-none border-2 focus:border-blue-500 rounded-md" required />
        </div>

        <div className="mt-2">
          <label htmlFor="source_link">Source link: </label>
          <input
            onChange={handle_change}
            value={form_data.source_link}
            type="text" id="source_link"
            name="source_link"
            className="outline-none border-2 focus:border-blue-500 rounded-md" required />
        </div>
        <button type="submit" className="mt-8 bg-blue-700 hover:bg-blue-800 text-white font-bold py-1 px-3 rounded"
          onClick={handle_upload_click}
        >Add Project</button>
        {uploading_project &&
          (<h3 className="font-mono text-1xl mt-2">Uploading project...</h3>)}
        {upload_finished &&
          (<h3 className="font-mono text-1xl mt-4">YAY finised uploading {form_data.project_name} :) 🎉</h3>)}
      </div>
    </div >
  )
}

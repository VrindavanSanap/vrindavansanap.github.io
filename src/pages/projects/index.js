import Link from 'next/link'
import Project from './project'
import { collection, query, getDocs, orderBy, limit } from "firebase/firestore";
import { db } from '../../firebase'
import { doc, getDoc, deleteDoc } from "firebase/firestore"
import { useEffect, useState } from 'react';
export default function Projects() {

    // let project = {
    //     name: "Minesweeper",
    //     desc: "Minesweeper, used convolutions to calculate neibours, floodfill to fill empty cells",
    //     demo_link: "https://vrindavansanap.github.io/minesweeper/",
    //     source_link: "https://github.com/VrindavanSanap/minesweeper"
    // }
    const [projects, set_projects] = useState([])
    const [error, set_error] = useState(false)
    useEffect(() => {
        get_books();
    }, []);
    async function get_books() {
        // set_getting_books(true)
        try {
            const projects_ref = collection(db, "projects");
            const q = query(projects_ref, orderBy("project_name"), limit(20));
            const query_snapshot = await getDocs(q);
            let projects_ = []
            query_snapshot.forEach((doc) => {
                projects_.push(doc.data())
            });
            set_projects(projects_)
            console.log(projects_[0])
        } catch (e) {
            // set_error(e.toString())
            set_error(e)
        }
        // set_getting_books(false)
    }
    function Error_component(props) {
        const error_ = props.error;
        if (error_) {
            return (
                <div className='ml-5 text-red-500'>
                    <b className='text-red-600'>Error: </b>
                    {`${error_}`}
                </div>
            )
        } else {
            return <></>;
        }
    }
    return (
        <div className="font-mono ml-7 mt-7">
            <h1 className="text-5xl">
                Vrindavan's Projects
            </h1>
            <div className='ml-5'>
                <Link href="/" className="underline text-2xl text-blue-600 hover:text-blue-800 visited:text-purple-600 cursor-pointer ">Home</Link>

                <h1 className="text-2xl ">
                    Projects
                </h1>
                <div className='ml-5'>
                    {/* <Project name={project.name} desc={project.desc} demo_link={project.demo_link}
                        source_link={project.source_link} /> */}
                    <Error_component error={error} />

                    {projects.map((project, index) => (
                        <Project key={ index} name={project.project_name} desc={project.project_desc} demo_link={project.demo_link}
                            source_link={project.source_link} />
                    ))}

                </div>
            </div>


        </div>
    )
}

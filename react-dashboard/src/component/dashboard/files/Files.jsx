import React from 'react'
import FilesIcon1 from '../../../icons/FilesIcon1'
import FilesIcon2 from '../../../icons/FilesIcon2'
import FilesIcon3 from '../../../icons/FilesIcon3'
import OptionImage from '../../../assets/Group 4231.png'
import Add from '../../../icons/Add'
const Files = () => {
    const dashboradFilesData = [
        {
            icon:<FilesIcon1/>,
            heading:"asdf1",
            text:"text1"
        },
        {
            icon:<FilesIcon2/>,
            heading:"asdf2",
            text:"text2"
        },
        {
            icon:<FilesIcon3/>,
            heading:"asdf3",
            text:"text3"
        }
    ]
    return (
        <div className='dashboard-files'>
            {dashboradFilesData.map((item, index) => (
                <div>
                    <div>
                        <div>{item.icon}</div>
                        <div><img src={OptionImage} alt='Options'/></div>

                    </div>
                    <div className='dashboard-files-text'>
                        <h3>{item.heading}</h3>
                        <p>{item.text}</p>
                    </div>
                </div>
            ))}
            <div className='dashboard-files-add' >
                <Add/>
                <h3>Add a new file</h3>
            </div>
        </div>
    )
}

export default Files

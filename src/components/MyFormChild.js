import React from "react";

class MyFormChild extends React.Component {

    render() {
        let { name, age, address, arrJobs } = this.props
        let a = '';
        return (
            <>
                <div className="job-lists">
                    {
                        a = arrJobs.map((item, index) => {
                            return (
                                <div key={item.id}> {item.title} - {item.salary}</div>
                            )
                        })
                    }
                </div>
                {console.log(a)}
            </>
        )
    }
}
export default MyFormChild
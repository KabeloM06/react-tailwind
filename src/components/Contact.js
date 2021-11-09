import React from 'react'

const Contact = () => {
    return (
        <>
        <section className="bg-blue-100 p-10 items-center max-w-full">
            
            <h2 className="font-MyFont text-center font-bold text-3xl pb-10">Contact Me</h2>
            
            <div className="px-20 max-w-full justify-between text-center lg:flex lg:w-screen items-center">
                <div>
                    <h3 className="font-bold">
                        Location: 
                    </h3>
                    <h3 className="mb-8">
                        Pretoria, South Africa
                    </h3>
                </div>
                <div>
                    <h3 className="font-bold">
                        Cell:
                    </h3>
                    <h3 className="mb-8">
                        +27 63 685 5959
                    </h3>
                </div>
                <div>
                    <h3 className="font-bold">
                        Email:
                    </h3>
                    <h3>
                        kmpretoria@gmail.com
                    </h3>
                </div>
            </div>
            
        </section>
            
        </>
    )
}

export default Contact

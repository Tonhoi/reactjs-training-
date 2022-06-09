import React, { Component } from 'react';

class TodoList extends Component<{}, { [key: string]: string | string[] }> {
    constructor(props: object) {
        super(props);
        this.state = {
            input: '',
            lists: [''],
            check: '1',
            dem: '1',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleRenderList = this.handleRenderList.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleChange(e: any) {
        this.setState({
            input: e.target.value,
        });
    }
    handleRenderList(e: any) {
        this.setState((prev: any) => {
            return {
                lists: [...prev.lists, prev.input],
            };
        });
    }
    handleClose(index: number) {
        this.setState((prev: any) => {
            let listsCoppy = [...prev.lists];
            listsCoppy.splice(index, 1);
            return {
                lists: listsCoppy,
            };
        });
    }

    // handleUpdate(e: any, index: number) {
    //     const input = document.querySelector('input');
    //     if (input !== null) {
    //         input.focus();
    //     }
    //     console.log(this.state.lists);

    //     this.setState((prev: any) => {
    //         let listsCoppy = [...prev.lists];
    //         listsCoppy[index] = this.state.input;
    //         return {
    //             check: 'true',
    //             input: prev.input,
    //             lists: listsCoppy,
    //         };
    //     });
    // }
    render() {
        return (
            <>
                <div className="text-center pt-[40px] pb-[12px] border border-b-gray-600">
                    <input
                        type="text"
                        value={this.state.input}
                        className="border border-gray-600 p-2 rounded-lg"
                        onChange={(e) => this.handleChange(e)}
                    />
                    <button
                        className="ml-[4px] bg-green-400 p-2 rounded-[8px]"
                        onClick={(e) => this.handleRenderList(e)}
                    >
                        Click me
                    </button>
                </div>

                {Array.from(this.state.lists).map((list, index) => {
                    return (
                        <ul className=' className="text-center font-semibold font-[20px] mt-[4px] ' key={index}>
                            {list.length > 0 && (
                                <li className="flex items-center justify-center">
                                    {list}
                                    <div className="ml-2">
                                        <span
                                            className="update inline-block p-1 bg-green-500 rounded-lg mr-2 cursor-pointer text-white hover:opacity-50"
                                            data-index={index}
                                        >
                                            update
                                        </span>
                                        <span
                                            className="close inline-block ml-[4px] text-[20px] cursor-pointer"
                                            data-index={index}
                                            onClick={(e) => this.handleClose(index)}
                                        >
                                            &times;
                                        </span>
                                    </div>
                                </li>
                            )}
                        </ul>
                    );
                })}
            </>
        );
    }
}

export default TodoList;

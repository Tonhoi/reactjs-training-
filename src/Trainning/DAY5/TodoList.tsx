import React, { Component } from 'react';

class TodoList extends Component<{}, { [key: string]: string | string[] }> {
    constructor(props: object) {
        super(props);
        this.state = {
            check: 'false',
            input: '',
            lists: [''],
            dem: '1',
        };
        this.handleUpdate = this.handleUpdate.bind(this);
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
        if (this.state.check === 'false') {
            this.setState((prev: any) => {
                return {
                    lists: [...prev.lists, prev.input],
                };
            });
        }
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

    handleUpdate(e: any) {
        const check = e.target.closest('.update');
        if (check) {
            const getInput = check.dataset.index;
            const input = document.querySelector('input');
            if (input !== null) {
                input.focus();
            }
            this.setState((prev: any) => {
                let listsCoppy = [...prev.lists];
                listsCoppy[getInput] = prev.input;
                return {
                    check: 'true',
                    lists: listsCoppy,
                };
            });

            setTimeout(() => {
                this.setState({
                    check: 'false',
                });
            }, 500);
        }
    }

    render() {
        return (
            <div className="wrapper">
                <div className="text-center pt-[40px] pb-[12px] border border-b-gray-600">
                    <input
                        type="text"
                        value={this.state.input}
                        className="p-2 border border-gray-600 rounded-lg"
                        onChange={(e) => this.handleChange(e)}
                    />
                    <button
                        className="create-list ml-[4px] bg-green-400 p-2 rounded-[8px]"
                        onClick={(e) => this.handleRenderList(e)}
                    >
                        Click me
                    </button>
                    <h1>{this.state.check}</h1>
                </div>

                <ul className=' className="update-parent text-center font-semibold font-[20px] mt-[4px] '>
                    {Array.from(this.state.lists).map((list, index) => {
                        return (
                            <div key={index}>
                                {list.length > 0 && (
                                    <li
                                        className="flex items-center justify-center parent-update list"
                                        onClick={(e) => this.handleUpdate(e)}
                                    >
                                        {list}
                                        <div className="ml-2">
                                            <span
                                                className="inline-block p-1 mr-2 text-white bg-green-500 rounded-lg cursor-pointer update hover:opacity-50"
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
                            </div>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default TodoList;

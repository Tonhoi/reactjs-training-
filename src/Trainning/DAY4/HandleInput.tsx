import React, { Component } from 'react';

class HandleInput extends Component {
    state = {
        name: 'Hội',
    };

    updateName(e: any) {
        this.setState((prev) => ({
            name: e.target.value,
        }));
    }
    render() {
        return (
            <>
                <div className="py-3 my-4 text-center border border-b-2 border-b-slate-500">
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={(e) => this.updateName(e)}
                        className="border border-black"
                    />
                </div>
                <h1 className="block text-center text-[40px]">{this.state.name}</h1>
            </>
        );
    }
}

export default HandleInput;

import React from "react";
import './todo.css'

function Todo() {
    return (
        <div className="container">
            <div className="main">
                <div className="header">
                    <span className="header-icon"><i className="fas fa-check-square"></i></span>
                    <span className="header-text">My Todo-s</span>
                </div>
                <div className="box">
                    <div className="input-container">
                        <input type="text" className="input" placeholder="Add new..." />
                        <span className="input-btn">
                            <span></span>
                            <span className="add-btn"><button>ADD</button></span>
                        </span>
                    </div>
                </div>
                <div className="line"></div>

                <div className="list-container">
                    <div className="list">
                        <div className="listItem">
                            <span>
                                <span className="done-icon"><i class="fas fa-check"></i></span>
                                <span className="name">Go To School</span>
                            </span>
                            <span className="action-box">
                                <span className="edit-btn"><i class="fas fa-edit"></i></span>
                                <span className="delete-btn"><i class="fas fa-trash-alt"></i></span>
                            </span>
                        </div>
                        <div className="listItem">
                            <span>
                                <span className="done-icon"><i class="fas fa-check"></i></span>
                                <span className="name">Go To School</span>
                            </span>
                            <span className="action-box">
                                <span className="edit-btn"><i class="fas fa-edit"></i></span>
                                <span className="delete-btn"><i class="fas fa-trash-alt"></i></span>
                            </span>
                        </div>
                        <div className="listItem">
                            <span>
                                <span className="done-icon"><i class="fas fa-check"></i></span>
                                <span className="name">Go To School</span>
                            </span>
                            <span className="action-box">
                                <span className="edit-btn"><i class="fas fa-edit"></i></span>
                                <span className="delete-btn"><i class="fas fa-trash-alt"></i></span>
                            </span>
                        </div>
                        <div className="listItem">
                            <span>
                                <span className="done-icon"><i class="fas fa-check"></i></span>
                                <span className="name">Go To School</span>
                            </span>
                            <span className="action-box">
                                <span className="edit-btn"><i class="fas fa-edit"></i></span>
                                <span className="delete-btn"><i class="fas fa-trash-alt"></i></span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Todo
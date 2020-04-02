import React from 'react';
import { FiMessageSquare, FiShare2, FiCheckSquare, FiDownload } from 'react-icons/fi';
import {IoIosArrowDown } from 'react-icons/io';
import {AiFillLike } from 'react-icons/ai';
import './Post.sass';

export default function Post(props){
    return (
        <div className="post-data col-md-6">
          <div className="row">
            <div className="col-2">
                <div className="avatar">
                  <img src={props.authorData.photo} alt="user photo"/>  
                </div>
            </div>
            <div className="col-10">
              <div className="post-info">
                    <p className="header-post-info">
                      <b className="name">{props.authorData.name}</b>
                      <span className="icon"><FiCheckSquare /></span>
                      <span className="nickname">{props.authorData.nickname}</span>
                      <span className="date">{props.date}</span>
                    </p>
                    <p className="text-content">{props.content}</p>
                  <span className="check-down"><IoIosArrowDown /></span>
              </div>
            </div>
            <div className="col-10 offset-2">
              <div className="post-content">
                  <img src={props.image} alt="content photo"/>
              </div>
              <div className="post-footer">
                      <a href="#"><span className="icon"><FiMessageSquare /></span>482</a>
                      <a href="#"><span className="icon"><FiShare2 /></span>146</a>
                      <a href="#"><span className="icon"><AiFillLike /></span>887</a>
                      <a href="#"><span className="icon"><FiDownload /></span></a>
              </div> 
            </div>
          </div>
        </div>
    );
}
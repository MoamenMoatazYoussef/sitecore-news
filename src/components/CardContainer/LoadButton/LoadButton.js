import React from 'react';
import { Button }  from 'react-bootstrap';
import './LoadButton.css';

export const LoadButton = ({ onClick }) => <Button onClick={onClick}>Load More</Button>;
export const LoadingButton = () => <Button disabled={true}>Loading...</Button>;


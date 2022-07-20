/**
 * Developed By: Bharat Jograna
 * Created on: 06 July 2022
 * Function Componen: model Widget Component
*/
import React, { useState } from 'react';
import { Button, Form, Modal, Table } from 'react-bootstrap';

function ItemModal ({show = false, data = [], handleClose, handleSubmit}) {
	
  const [areadata, setAreadata] = useState(""+data.ProgileContext);

  return (
    <Modal show={show} onHide={handleClose}>
		<Modal.Header closeButton>
		  <Modal.Title>{data.CategoryName}</Modal.Title>
		</Modal.Header>
		<Modal.Body>
		 <Form>
		<Table>
		<tbody>
			<tr>
				<td>Title : </td>
				<td>{data.ProgileTitle}</td>
			</tr>
			<tr>
				<td>Name : </td>
				<td>{data.ProgileName}</td>
			</tr>
			<tr>
				<td>Context :</td>
				<Form.Control as="textarea" rows={3} value={areadata} onChange={(e)=>setAreadata(e.target.value)} />
			</tr>
		</tbody>
		</Table>
		</Form>
		</Modal.Body>
		<Modal.Footer>
		  <Button variant="success" onClick={()=>{handleSubmit(areadata)}}>
			Save
		  </Button>
		  <Button variant="primary" onClick={handleClose}>
			Close
		  </Button>
		</Modal.Footer>
	</Modal>
  );
}

export default ItemModal;
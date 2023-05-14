import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { ExpensesJr } from '../components/Dashboard/ExpensesJr';

export const Expenses = () => {
    const items = [
        {
          date: '2022-01-01',
          transactionName: 'Walmart',
          category: 'Food',
          amount: 50.00
        },
        {
          date: '2022-01-05',
          transactionName: 'Exxon',
          category: 'Transportation',
          amount: 35.55
        },
        {
          date: '2022-01-10',
          transactionName: 'AMC Theater',
          category: 'Entertainment',
          amount: 24.00
        },
        {
          date: '2022-01-15',
          transactionName: 'AT&T ',
          category: 'Utilities',
          amount: 80.00
        },
        {
          date: '2022-01-20',
          transactionName: 'Hutchins BBQ',
          category: 'Food',
          amount: 75.00
        },
        {
          date: '2022-01-25',
          transactionName: 'Planet Fitness Family Plan',
          category: 'Fitness',
          amount: 50.00
        },
        {
          date: '2022-02-01',
          transactionName: 'Starbucks',
          category: 'Food',
          amount: 4.52
        },
        {
          date: '2022-02-05',
          transactionName: 'Uber',
          category: 'Transportation',
          amount: 20.00
        },
        {
          date: '2022-02-10',
          transactionName: 'Seat Geek: Taylor Switft',
          category: 'Entertainment',
          amount: 100.00
        },
        {
          date: '2022-02-15',
          transactionName: 'Shell Energy Co.',
          category: 'Utilities',
          amount: 120.00
        },
        {
            date: '2022-02-20',
            transactionName: 'Lunch',
            category: 'Food',
            amount: 12.00
          },
          {
            date: '2022-02-25',
            transactionName: 'Dick\'s Sporting Goods',
            category: 'Fitness',
            amount: 85.00
          },
          {
            date: '2022-03-01',
            transactionName: 'Uber',
            category: 'Transportation',
            amount: 45.00
          },
          {
            date: '2022-03-05',
            transactionName: 'Netflix',
            category: 'Entertainment',
            amount: 15.00
          },
          {
            date: '2022-03-10',
            transactionName: 'Collin County Water District 32',
            category: 'Utilities',
            amount: 60.00
          }
        
      ];
      

    return (
        <section className='expense-master'>
            <Container className='expense-main'>
                <Col className='expense-left'>
                    <h2 className='center-head'>Expenses</h2>
                    <table className='expense-list' id='expense-list'>
                        <tr>
                            <th className='expense-header'>Date</th>
                            <th className='expense-header'>Name</th>
                            <th className='expense-header'>Category</th>
                            <th className='expense-header'>Amount</th>
                        </tr>
                        
                        {items.map((item) => {
                        return (
                            <tr className='row'>
                            <th className='row-item'>
                                {item.date}
                            </th>
                            <th>
                                {item.transactionName}
                            </th>
                            <th>
                                {item.category}
                            </th>
                            <th>
                                ${item.amount}
                            </th>
                            </tr>
                                )
                        })}
              
                    </table>
                </Col>
            </Container>
        </section>
    )
}
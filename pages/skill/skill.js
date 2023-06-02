import styles from './Home.module.css'
import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip
);

export default function SkillPage()
{
  const options = {
    indexAxis: 'y',
    elements: {
        font: {
            size: 14
        }
    },
    scales: {
        x: {
            grid: {
                display: false,
            },
            ticks: {
                font:
                {
                    family: 'Times New Roman',
                    size: 16,
                    weight: 'bold',
                    fontColor: '#000'
                }
            }
        },
        y: {
            grid: {
                display: false,
            },
            ticks: {
                font:
                {
                    family: 'Times New Roman',
                    size: 16,
                    weight: 'bold',
                    fontColor: '#000'
                }
            }
        }
    },
    plugins: {
        // title: {
        //     display: true,
        //     text: 'Interset Basis Chart',
        //     font:
        //     {
        //         family: 'Times New Roman',
        //         size: 25,
        //         weight: 'bold',
        //     }
        // }
    },
    responsive: true,
};

const labels = ['Full Stack Developer', 'Chatbot Developer', 'Researcher', 'AI and ML', 'Software Developer', 'Data Analyst'];

const data = {
    labels,
    datasets: [
        {
            barThickness: 6,
            data: [100, 100, 100, 100, 100, 100, 100],
            backgroundColor: 'purple',
        }
    ],
};

  return (
<div className={styles.mainContainer} id="skill">
        <div className={`${styles.header}`}>
           My Skills
        </div>
        <div className={styles.graph}>
                <Bar options={options} data={data} />
        </div>
        </div>
  );
}

import React from 'react'
import Subscription from "../subscriptions.json"
import { Chart } from "react-google-charts";

export default function UpperVisPresPieChart() {

    const Plan1 = Subscription.filter(subs => subs.package === "Plan 1");
    const Plan2 = Subscription.filter(subs => subs.package === "Plan 2");
    const Plan3 = Subscription.filter(subs => subs.package === "Plan3");
    const Plan6 = Subscription.filter(subs => subs.package === "Plan 6");
    const Plan12 = Subscription.filter(subs => subs.package === "Plan 12");
    const PlanUL = Subscription.filter(subs => subs.package === "Plan Unlimited");


    return (
        <div style={{height:"65%"}}>
             <Chart
                width={'330px'}
                height={'180px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                  ['Plans', 'No. of Customers'],
                  ['Plan 1', Plan1.length],
                  ['Plan 2', Plan2.length],
                  ['Plan 3', Plan3.length],
                  ['Plan 6', Plan6.length],
                  ['Plan 12',Plan12.length],
                  ['Plan UL', PlanUL.length]
                ]}
                options={{
                  width:"100%",
                  height:"100%",
                  backgroundColor: '#0E0F2E',
                  color:"white",
                  is3D: true,
                  legend: 'none',
                }}
              />
        </div>
    )
}
import { Card, CardHeader, CardBody } from '@heroui/react';
import type { Job } from '../data/types';

export default function JobCard({ job }: { job: Job }) {
    return (
        <Card className="dark:bg-stone-800 ring ring-stone-900/5 dark:text-stone-100">
            <CardHeader className="pb-0">
                <div className="flex flex-col gap-0">
                    <p className="font-bold">{job.role}</p>
                    <p className="font-medium dark:text-stone-300">
                        {job.company} - {job.location}
                    </p>
                    <p className="font-thin dark:text-stone-400">
                        {job.start} - {job.end}
                    </p>
                </div>
            </CardHeader>
            <CardBody>
                <p className="dark:text-stone-200">{job.description}</p>
            </CardBody>
        </Card>
    );
}

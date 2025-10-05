import { Card, CardHeader, CardBody } from '@heroui/react';
import type { Job } from '../data/types';

export default function JobCard({ job }: { job: Job }) {
    return (
        <Card>
            <CardHeader className="pb-0">
                <div className="flex flex-col gap-0">
                    <p className="font-bold">{job.role}</p>
                    <p className="font-medium">
                        {job.company} - {job.location}
                    </p>
                    <p className="font-thin">
                        {job.start} - {job.end}
                    </p>
                </div>
            </CardHeader>
            <CardBody>
                <p>{job.description}</p>
            </CardBody>
        </Card>
    );
}

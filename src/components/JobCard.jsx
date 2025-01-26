import { Card, CardHeader, CardBody } from '@heroui/react';

export default function JobCard({ job }) {
    return (
        <Card>
            <CardHeader className="pb-0">
                <div className="flex flex-col gap-0">
                    <p className="font-bold">{job.data.role}</p>
                    <p className="font-medium">
                        {job.data.company} - {job.data.location}
                    </p>
                    <p className="font-thin">
                        {job.data.start} - {job.data.end}
                    </p>
                </div>
            </CardHeader>
            <CardBody>
                <p>{job.data.description}</p>
            </CardBody>
        </Card>
    );
}

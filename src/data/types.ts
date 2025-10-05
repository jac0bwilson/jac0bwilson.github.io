export type Link = {
    id: string;
    name: string;
    url: string;
    colour:
        | 'foreground'
        | 'primary'
        | 'secondary'
        | 'success'
        | 'warning'
        | 'danger';
};

export type LinkEntry = {
    data: Link;
};

export type Job = {
    id: string;
    company: string;
    role: string;
    start: string;
    end: string;
    location: string;
    description: string;
};

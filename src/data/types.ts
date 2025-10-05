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

export type CloudinaryResource = {
    public_id: string;
    format: string;
    version: number;
    resource_type: string;
    type: string;
    created_at: string;
    bytes: number;
    width: number;
    height: number;
    url: string;
    secure_url: string;
};

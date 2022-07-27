
export type CategoryProperties = {
     name: string,
     is_active?: boolean,
     description?: string,
     created_at?: Date,
     
 }


export class Category{
    constructor(public readonly props: CategoryProperties){
        this.description = this.props.description;
        this.is_active = this.props.is_active ?? true;
        this.props.created_at = this.props.created_at ?? new Date();
    }


    get name(): string {
        return this.props.name;
    }

    get description(): string | undefined {
        return this.props.description;
    }

    private set description(value){
        this.props.description = value ?? null;
    }

    get is_active(): boolean | undefined {
        return this.props.is_active;
    }

    private set is_active(value){
        this.props.is_active = value ?? true;
    }

    get created_at(): Date | undefined {
        return this.props.created_at;
    }
}

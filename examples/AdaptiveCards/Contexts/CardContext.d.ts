import { CardModel } from '../Models/Cards/Card';
import { TreeNode } from '../Shared/Types';
import { FormStore } from './FormStore';
import { SchemaStore } from './SchemaStore';
export declare class CardContext extends TreeNode<CardContext> {
    private onError?;
    private onInfo?;
    private onWarning?;
    private onFocus?;
    private onBlur?;
    private onOpenUrlAction?;
    private onShowCardAction?;
    private onSubmitAction?;
    private onCallbackAction?;
    private onSelectAction?;
    readonly form: FormStore;
    readonly schemas: SchemaStore;
    readonly children: CardContext[];
    fit: 'content' | 'background';
    private constructor();
    static createInstance(parent?: CardContext): CardContext;
    registerErrorHandler(handler: (error: any) => void): void;
    registerInfoHandler(handler: (info: any) => void): void;
    registerWarningHandler(handler: (warning: any) => void): void;
    registerFocusHandler(handler: () => void): void;
    registerBlurHandler(handler: () => void): void;
    registerOpenUrlActionHandler(handler: (url: string, method: string, data: any) => Promise<any>): void;
    registerShowCardActionHandler(handler: (card: CardModel) => Promise<any>): void;
    registerSubmitActionHandler(handler: (data: any) => Promise<any>): void;
    registerCallbackActionHandler(handler: (url: string, parameters: {
        [key: string]: string;
    }) => Promise<any>): void;
    registerSelectActionHandler(handler: (data: any) => Promise<any>): void;
    private findRequiredContext;
    readonly errorHandler: (error: any) => void;
    readonly infoHandler: (info: any) => void;
    readonly warningHandler: (warning: any) => void;
    readonly focusHandler: () => void;
    readonly blurHandler: () => void;
    readonly openUrlActionHandler: (url: string, method: string, data: any) => Promise<any>;
    readonly showCardActionHandler: (card: CardModel) => Promise<any>;
    readonly submitActionHandler: (data: any) => Promise<any>;
    readonly callbackActionHandler: (url: string, parameters: {
        [key: string]: string;
    }) => Promise<any>;
    readonly selectActionHandler: (data: any) => Promise<any>;
}

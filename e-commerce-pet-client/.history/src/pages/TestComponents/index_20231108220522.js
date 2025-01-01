import Button from "../../components/Button";
import { Icon } from "@iconify/react";
import TextField from "../../components/textField";

const TestComponents = () => {
    return (
        <>
            <div className="flex items-center gap-5 bg-gray p-20">
                <Button htmlType="link" type="primary" url="/">
                    Click me!
                </Button>
                <Button htmlType="link" type="primary" color="green" url="/">
                    Read more
                </Button>
                <Button htmlType="link" type="primary" ghost url="/">
                    Read more
                </Button>
                <Button htmlType="link" type="primary" url="/" color="white">
                    Read more
                </Button>

                <Button htmlType="link" type="primary" url="/">
                    <span>
                        <Icon icon="mdi:play" />
                    </span>
                    see on video
                </Button>
                <Button htmlType="submit" type="primary" size="small" ghost>
                    filter
                </Button>
                <Button htmlType="submit" type="icon">
                    <Icon icon="pepicons-pop:cart" />
                </Button>
                <Button htmlType="submit" type="icon">
                    <Icon icon="mingcute:arrow-right-line" />
                </Button>
                <div className="flex-1">
                    <Button
                        htmlType="submit"
                        type="primary"
                        className="w-100 text-center"
                    >
                        Log in
                    </Button>
                </div>
            </div>
            {/* TextField Search */}
            <div className="text__search">
                <TextField
                    type="search"
                    name="search"
                    placeholder="Start typing..."
                    value=""
                    onChange=""
                    disabled={false}
                    color="green"
                />
                <TextField
                    type="form"
                    name=""
                    placeholder=""
                    value=""
                    onChange=""
                    disabled={false}
                    color="green"
                />
                <TextField
                    type="checkbox"
                    name=""
                    placeholder=""
                    value=""
                    onChange=""
                    disabled={false}
                    color="green"
                />
            </div>
            Footer
        </>
    );
};
export default TestComponents;

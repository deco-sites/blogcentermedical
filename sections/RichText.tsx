import { HTMLWidget } from "apps/admin/widgets.ts";

interface Props {
    content?: HTMLWidget
}

export default function RichText({
    content = ""
}: Props) {
    return (
        <div class="container">
            <div
                dangerouslySetInnerHTML={{
                    __html: content,
                }}
            />
        </div>
    )
}
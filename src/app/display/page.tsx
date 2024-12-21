"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function Home() {
    return (
        <Suspense>
            <Page />
        </Suspense>
    )
}

function Page() {
const pages = [
        <>
        <p>テキスト1</p>//ページ0の内容です
        <p>テキスト2</p>//ページ0の内容です。
        </>,
        <>
        <p>テキスト1</p>//ページ1の内容です。
        <p>テキスト2</p>//ページ1の内容です。
        </>,
        <>
        <p>テキスト1</p>//ページ2の内容です。
        <p>テキスト2</p>//ページ2の内容です。
        </>,
        <>
        <p>テキスト1</p>//ページ3の内容です。
        <p>テキスト2</p>//ページ3の内容です。
        </>,
    ]
const searchParams = useSearchParams();

const page = searchParams.get("page");

return (
        <>
            {pages[Number(page)]}
        </>
    );
}
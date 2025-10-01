import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    if (!data.nome || !data.email || !data.areaInteresse) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios" },
        { status: 400 }
      );
    }

    console.log("📝 Dados recebidos:", data);

    if (!process.env.N8N_WEBHOOK_URL) {
      console.error("❌ N8N_WEBHOOK_URL não está configurada!");
      return NextResponse.json(
        { error: "Configuração do servidor incorreta" },
        { status: 500 }
      );
    }

    const response = await fetch(process.env.N8N_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`N8N retornou erro: ${response.status}`);
    }

    return NextResponse.json({
      success: true,
      message: "Cadastro realizado com sucesso!",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao processar cadastro", details: String(error) },
      { status: 500 }
    );
  }
}

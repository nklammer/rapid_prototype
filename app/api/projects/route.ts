import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

export async function GET() {
  try {
    const csvFilePath = path.join(process.cwd(), 'data', 'projects.csv');
    const fileContent = fs.readFileSync(csvFilePath, 'utf-8');
    
    const records = parse(fileContent, {
      columns: true,
      skip_empty_lines: true
    });

    const projects = records.map((record: any) => ({
      id: record.id,
      name: record.name,
      description: record.description,
      repoUrl: record.repoUrl,
      sdgs: record.sdgs.split(',').map(Number),
      tags: record.tags.split(','),
      metrics: {
        stars: parseInt(record.stars),
        contributors: parseInt(record.contributors),
        lastUpdate: record.lastUpdate
      }
    }));

    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error loading projects:', error);
    return NextResponse.json({ error: 'Failed to load projects' }, { status: 500 });
  }
}